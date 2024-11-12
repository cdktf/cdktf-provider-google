# `computeSecurityPolicyRule` Submodule <a name="`computeSecurityPolicyRule` Submodule" id="@cdktf/provider-google.computeSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityPolicyRuleA <a name="ComputeSecurityPolicyRuleA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule google_compute_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleA(scope Construct, id *string, config ComputeSecurityPolicyRuleAConfig) ComputeSecurityPolicyRuleA
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig">ComputeSecurityPolicyRuleAConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig">ComputeSecurityPolicyRuleAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putHeaderAction">PutHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRateLimitOptions">PutRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRedirectOptions">PutRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetHeaderAction">ResetHeaderAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetRateLimitOptions">ResetRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetRedirectOptions">ResetRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutHeaderAction` <a name="PutHeaderAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putHeaderAction"></a>

```go
func PutHeaderAction(value ComputeSecurityPolicyRuleHeaderActionA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putHeaderAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA">ComputeSecurityPolicyRuleHeaderActionA</a>

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putMatch"></a>

```go
func PutMatch(value ComputeSecurityPolicyRuleMatchA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putPreconfiguredWafConfig"></a>

```go
func PutPreconfiguredWafConfig(value ComputeSecurityPolicyRulePreconfiguredWafConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA">ComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

---

##### `PutRateLimitOptions` <a name="PutRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRateLimitOptions"></a>

```go
func PutRateLimitOptions(value ComputeSecurityPolicyRuleRateLimitOptionsA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

---

##### `PutRedirectOptions` <a name="PutRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRedirectOptions"></a>

```go
func PutRedirectOptions(value ComputeSecurityPolicyRuleRedirectOptionsA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA">ComputeSecurityPolicyRuleRedirectOptionsA</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putTimeouts"></a>

```go
func PutTimeouts(value ComputeSecurityPolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHeaderAction` <a name="ResetHeaderAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetHeaderAction"></a>

```go
func ResetHeaderAction()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetId"></a>

```go
func ResetId()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreconfiguredWafConfig"></a>

```go
func ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRateLimitOptions` <a name="ResetRateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetRateLimitOptions"></a>

```go
func ResetRateLimitOptions()
```

##### `ResetRedirectOptions` <a name="ResetRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetRedirectOptions"></a>

```go
func ResetRedirectOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecurityPolicyRuleA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.ComputeSecurityPolicyRuleA_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.ComputeSecurityPolicyRuleA_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.ComputeSecurityPolicyRuleA_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.ComputeSecurityPolicyRuleA_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeSecurityPolicyRuleA resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeSecurityPolicyRuleA to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeSecurityPolicyRuleA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityPolicyRuleA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference">ComputeSecurityPolicyRuleHeaderActionAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference">ComputeSecurityPolicyRuleMatchAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference">ComputeSecurityPolicyRuleRedirectOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference">ComputeSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.headerActionInput">HeaderActionInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA">ComputeSecurityPolicyRuleHeaderActionA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA">ComputeSecurityPolicyRulePreconfiguredWafConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.previewInput">PreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptionsInput">RateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.redirectOptionsInput">RedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA">ComputeSecurityPolicyRuleRedirectOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preview">Preview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `HeaderAction`<sup>Required</sup> <a name="HeaderAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.headerAction"></a>

```go
func HeaderAction() ComputeSecurityPolicyRuleHeaderActionAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference">ComputeSecurityPolicyRuleHeaderActionAOutputReference</a>

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.match"></a>

```go
func Match() ComputeSecurityPolicyRuleMatchAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference">ComputeSecurityPolicyRuleMatchAOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfig"></a>

```go
func PreconfiguredWafConfig() ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference">ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference</a>

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptions"></a>

```go
func RateLimitOptions() ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference</a>

---

##### `RedirectOptions`<sup>Required</sup> <a name="RedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.redirectOptions"></a>

```go
func RedirectOptions() ComputeSecurityPolicyRuleRedirectOptionsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference">ComputeSecurityPolicyRuleRedirectOptionsAOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeouts"></a>

```go
func Timeouts() ComputeSecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference">ComputeSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HeaderActionInput`<sup>Optional</sup> <a name="HeaderActionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.headerActionInput"></a>

```go
func HeaderActionInput() ComputeSecurityPolicyRuleHeaderActionA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA">ComputeSecurityPolicyRuleHeaderActionA</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.matchInput"></a>

```go
func MatchInput() ComputeSecurityPolicyRuleMatchA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preconfiguredWafConfigInput"></a>

```go
func PreconfiguredWafConfigInput() ComputeSecurityPolicyRulePreconfiguredWafConfigA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA">ComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.previewInput"></a>

```go
func PreviewInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RateLimitOptionsInput`<sup>Optional</sup> <a name="RateLimitOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.rateLimitOptionsInput"></a>

```go
func RateLimitOptionsInput() ComputeSecurityPolicyRuleRateLimitOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

---

##### `RedirectOptionsInput`<sup>Optional</sup> <a name="RedirectOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.redirectOptionsInput"></a>

```go
func RedirectOptionsInput() ComputeSecurityPolicyRuleRedirectOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA">ComputeSecurityPolicyRuleRedirectOptionsA</a>

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.preview"></a>

```go
func Preview() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleA.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityPolicyRuleAConfig <a name="ComputeSecurityPolicyRuleAConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleAConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Priority: *f64,
	SecurityPolicy: *string,
	Description: *string,
	HeaderAction: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA,
	Id: *string,
	Match: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA,
	PreconfiguredWafConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA,
	Preview: interface{},
	Project: *string,
	RateLimitOptions: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA,
	RedirectOptions: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | The name of the security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.headerAction">HeaderAction</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA">ComputeSecurityPolicyRuleHeaderActionA</a></code> | header_action block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#id ComputeSecurityPolicyRuleA#id}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA">ComputeSecurityPolicyRulePreconfiguredWafConfigA</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preview">Preview</a></code> | <code>interface{}</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#project ComputeSecurityPolicyRuleA#project}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.redirectOptions">RedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA">ComputeSecurityPolicyRuleRedirectOptionsA</a></code> | redirect_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#action ComputeSecurityPolicyRuleA#action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#priority ComputeSecurityPolicyRuleA#priority}

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

The name of the security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#security_policy ComputeSecurityPolicyRuleA#security_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#description ComputeSecurityPolicyRuleA#description}

---

##### `HeaderAction`<sup>Optional</sup> <a name="HeaderAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.headerAction"></a>

```go
HeaderAction ComputeSecurityPolicyRuleHeaderActionA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA">ComputeSecurityPolicyRuleHeaderActionA</a>

header_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#header_action ComputeSecurityPolicyRuleA#header_action}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#id ComputeSecurityPolicyRuleA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.match"></a>

```go
Match ComputeSecurityPolicyRuleMatchA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#match ComputeSecurityPolicyRuleA#match}

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preconfiguredWafConfig"></a>

```go
PreconfiguredWafConfig ComputeSecurityPolicyRulePreconfiguredWafConfigA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA">ComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#preconfigured_waf_config ComputeSecurityPolicyRuleA#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.preview"></a>

```go
Preview interface{}
```

- *Type:* interface{}

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#preview ComputeSecurityPolicyRuleA#preview}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#project ComputeSecurityPolicyRuleA#project}.

---

##### `RateLimitOptions`<sup>Optional</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.rateLimitOptions"></a>

```go
RateLimitOptions ComputeSecurityPolicyRuleRateLimitOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#rate_limit_options ComputeSecurityPolicyRuleA#rate_limit_options}

---

##### `RedirectOptions`<sup>Optional</sup> <a name="RedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.redirectOptions"></a>

```go
RedirectOptions ComputeSecurityPolicyRuleRedirectOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA">ComputeSecurityPolicyRuleRedirectOptionsA</a>

redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#redirect_options ComputeSecurityPolicyRuleA#redirect_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleAConfig.property.timeouts"></a>

```go
Timeouts ComputeSecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts">ComputeSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#timeouts ComputeSecurityPolicyRuleA#timeouts}

---

### ComputeSecurityPolicyRuleHeaderActionA <a name="ComputeSecurityPolicyRuleHeaderActionA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleHeaderActionA {
	RequestHeadersToAdds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code>interface{}</code> | request_headers_to_adds block. |

---

##### `RequestHeadersToAdds`<sup>Optional</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA.property.requestHeadersToAdds"></a>

```go
RequestHeadersToAdds interface{}
```

- *Type:* interface{}

request_headers_to_adds block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#request_headers_to_adds ComputeSecurityPolicyRuleA#request_headers_to_adds}

---

### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA {
	HeaderName: *string,
	HeaderValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerName">HeaderName</a></code> | <code>*string</code> | The name of the header to set. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerValue">HeaderValue</a></code> | <code>*string</code> | The value to set the named header to. |

---

##### `HeaderName`<sup>Optional</sup> <a name="HeaderName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

The name of the header to set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#header_name ComputeSecurityPolicyRuleA#header_name}

---

##### `HeaderValue`<sup>Optional</sup> <a name="HeaderValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsA.property.headerValue"></a>

```go
HeaderValue *string
```

- *Type:* *string

The value to set the named header to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#header_value ComputeSecurityPolicyRuleA#header_value}

---

### ComputeSecurityPolicyRuleMatchA <a name="ComputeSecurityPolicyRuleMatchA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleMatchA {
	Config: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA,
	Expr: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA,
	ExprOptions: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA,
	VersionedExpr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | expr_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | Preconfigured versioned expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.config"></a>

```go
Config ComputeSecurityPolicyRuleMatchConfigA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#config ComputeSecurityPolicyRuleA#config}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.expr"></a>

```go
Expr ComputeSecurityPolicyRuleMatchExprA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#expr ComputeSecurityPolicyRuleA#expr}

---

##### `ExprOptions`<sup>Optional</sup> <a name="ExprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.exprOptions"></a>

```go
ExprOptions ComputeSecurityPolicyRuleMatchExprOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

expr_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#expr_options ComputeSecurityPolicyRuleA#expr_options}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA.property.versionedExpr"></a>

```go
VersionedExpr *string
```

- *Type:* *string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#versioned_expr ComputeSecurityPolicyRuleA#versioned_expr}

---

### ComputeSecurityPolicyRuleMatchConfigA <a name="ComputeSecurityPolicyRuleMatchConfigA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleMatchConfigA {
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#src_ip_ranges ComputeSecurityPolicyRuleA#src_ip_ranges}

---

### ComputeSecurityPolicyRuleMatchExprA <a name="ComputeSecurityPolicyRuleMatchExprA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleMatchExprA {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#expression ComputeSecurityPolicyRuleA#expression}

---

### ComputeSecurityPolicyRuleMatchExprOptionsA <a name="ComputeSecurityPolicyRuleMatchExprOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleMatchExprOptionsA {
	RecaptchaOptions: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | recaptcha_options block. |

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA.property.recaptchaOptions"></a>

```go
RecaptchaOptions ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

recaptcha_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#recaptcha_options ComputeSecurityPolicyRuleA#recaptcha_options}

---

### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA {
	ActionTokenSiteKeys: *[]*string,
	SessionTokenSiteKeys: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>*[]*string</code> | A list of site keys to be used during the validation of reCAPTCHA action-tokens. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>*[]*string</code> | A list of site keys to be used during the validation of reCAPTCHA session-tokens. |

---

##### `ActionTokenSiteKeys`<sup>Optional</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.actionTokenSiteKeys"></a>

```go
ActionTokenSiteKeys *[]*string
```

- *Type:* *[]*string

A list of site keys to be used during the validation of reCAPTCHA action-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#action_token_site_keys ComputeSecurityPolicyRuleA#action_token_site_keys}

---

##### `SessionTokenSiteKeys`<sup>Optional</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA.property.sessionTokenSiteKeys"></a>

```go
SessionTokenSiteKeys *[]*string
```

- *Type:* *[]*string

A list of site keys to be used during the validation of reCAPTCHA session-tokens.

The provided site keys need to be created from reCAPTCHA API under the same project where the security policy is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#session_token_site_keys ComputeSecurityPolicyRuleA#session_token_site_keys}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigA <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRulePreconfiguredWafConfigA {
	Exclusion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA.property.exclusion">Exclusion</a></code> | <code>interface{}</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA.property.exclusion"></a>

```go
Exclusion interface{}
```

- *Type:* interface{}

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#exclusion ComputeSecurityPolicyRuleA#exclusion}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA {
	TargetRuleSet: *string,
	RequestCookie: interface{},
	RequestHeader: interface{},
	RequestQueryParam: interface{},
	RequestUri: interface{},
	TargetRuleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestCookie">RequestCookie</a></code> | <code>interface{}</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestQueryParam">RequestQueryParam</a></code> | <code>interface{}</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestUri">RequestUri</a></code> | <code>interface{}</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleSet"></a>

```go
TargetRuleSet *string
```

- *Type:* *string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#target_rule_set ComputeSecurityPolicyRuleA#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestCookie"></a>

```go
RequestCookie interface{}
```

- *Type:* interface{}

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#request_cookie ComputeSecurityPolicyRuleA#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#request_header ComputeSecurityPolicyRuleA#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestQueryParam"></a>

```go
RequestQueryParam interface{}
```

- *Type:* interface{}

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#request_query_param ComputeSecurityPolicyRuleA#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.requestUri"></a>

```go
RequestUri interface{}
```

- *Type:* interface{}

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#request_uri ComputeSecurityPolicyRuleA#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionA.property.targetRuleIds"></a>

```go
TargetRuleIds *[]*string
```

- *Type:* *[]*string

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#target_rule_ids ComputeSecurityPolicyRuleA#target_rule_ids}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieA.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderA.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamA.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#operator ComputeSecurityPolicyRuleA#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriA.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#value ComputeSecurityPolicyRuleA#value}

---

### ComputeSecurityPolicyRuleRateLimitOptionsA <a name="ComputeSecurityPolicyRuleRateLimitOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleRateLimitOptionsA {
	BanDurationSec: *f64,
	BanThreshold: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA,
	ConformAction: *string,
	EnforceOnKey: *string,
	EnforceOnKeyConfigs: interface{},
	EnforceOnKeyName: *string,
	ExceedAction: *string,
	ExceedRedirectOptions: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA,
	RateLimitThreshold: github.com/cdktf/cdktf-provider-google-go/google/v14.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.conformAction">ConformAction</a></code> | <code>*string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code>interface{}</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | exceed_redirect_options block. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | rate_limit_threshold block. |

---

##### `BanDurationSec`<sup>Optional</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banDurationSec"></a>

```go
BanDurationSec *f64
```

- *Type:* *f64

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#ban_duration_sec ComputeSecurityPolicyRuleA#ban_duration_sec}

---

##### `BanThreshold`<sup>Optional</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.banThreshold"></a>

```go
BanThreshold ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#ban_threshold ComputeSecurityPolicyRuleA#ban_threshold}

---

##### `ConformAction`<sup>Optional</sup> <a name="ConformAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.conformAction"></a>

```go
ConformAction *string
```

- *Type:* *string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#conform_action ComputeSecurityPolicyRuleA#conform_action}

---

##### `EnforceOnKey`<sup>Optional</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKey"></a>

```go
EnforceOnKey *string
```

- *Type:* *string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#enforce_on_key ComputeSecurityPolicyRuleA#enforce_on_key}

---

##### `EnforceOnKeyConfigs`<sup>Optional</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyConfigs"></a>

```go
EnforceOnKeyConfigs interface{}
```

- *Type:* interface{}

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#enforce_on_key_configs ComputeSecurityPolicyRuleA#enforce_on_key_configs}

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#enforce_on_key_name ComputeSecurityPolicyRuleA#enforce_on_key_name}

---

##### `ExceedAction`<sup>Optional</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedAction"></a>

```go
ExceedAction *string
```

- *Type:* *string

Action to take for requests that are above the configured rate limit threshold, to either deny with a specified HTTP response code, or redirect to a different endpoint.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#exceed_action ComputeSecurityPolicyRuleA#exceed_action}

---

##### `ExceedRedirectOptions`<sup>Optional</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.exceedRedirectOptions"></a>

```go
ExceedRedirectOptions ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

exceed_redirect_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#exceed_redirect_options ComputeSecurityPolicyRuleA#exceed_redirect_options}

---

##### `RateLimitThreshold`<sup>Optional</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA.property.rateLimitThreshold"></a>

```go
RateLimitThreshold ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#rate_limit_threshold ComputeSecurityPolicyRuleA#rate_limit_threshold}

---

### ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#count ComputeSecurityPolicyRuleA#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#interval_sec ComputeSecurityPolicyRuleA#interval_sec}

---

### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs {
	EnforceOnKeyName: *string,
	EnforceOnKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#enforce_on_key_name ComputeSecurityPolicyRuleA#enforce_on_key_name}

---

##### `EnforceOnKeyType`<sup>Optional</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```go
EnforceOnKeyType *string
```

- *Type:* *string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#enforce_on_key_type ComputeSecurityPolicyRuleA#enforce_on_key_type}

---

### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA {
	Target: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.target">Target</a></code> | <code>*string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.type">Type</a></code> | <code>*string</code> | Type of the redirect action. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#target ComputeSecurityPolicyRuleA#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#type ComputeSecurityPolicyRuleA#type}

---

### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#count ComputeSecurityPolicyRuleA#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#interval_sec ComputeSecurityPolicyRuleA#interval_sec}

---

### ComputeSecurityPolicyRuleRedirectOptionsA <a name="ComputeSecurityPolicyRuleRedirectOptionsA" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleRedirectOptionsA {
	Target: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA.property.target">Target</a></code> | <code>*string</code> | Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA.property.type">Type</a></code> | <code>*string</code> | Type of the redirect action. |

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA.property.target"></a>

```go
Target *string
```

- *Type:* *string

Target for the redirect action. This is required if the type is EXTERNAL_302 and cannot be specified for GOOGLE_RECAPTCHA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#target ComputeSecurityPolicyRuleA#target}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of the redirect action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#type ComputeSecurityPolicyRuleA#type}

---

### ComputeSecurityPolicyRuleTimeouts <a name="ComputeSecurityPolicyRuleTimeouts" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

&computesecuritypolicyrule.ComputeSecurityPolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#create ComputeSecurityPolicyRuleA#create}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#delete ComputeSecurityPolicyRuleA#delete}. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#update ComputeSecurityPolicyRuleA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#create ComputeSecurityPolicyRuleA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#delete ComputeSecurityPolicyRuleA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/compute_security_policy_rule#update ComputeSecurityPolicyRuleA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeSecurityPolicyRuleHeaderActionAOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleHeaderActionAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleHeaderActionAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.putRequestHeadersToAdds">PutRequestHeadersToAdds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.resetRequestHeadersToAdds">ResetRequestHeadersToAdds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestHeadersToAdds` <a name="PutRequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.putRequestHeadersToAdds"></a>

```go
func PutRequestHeadersToAdds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.putRequestHeadersToAdds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestHeadersToAdds` <a name="ResetRequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.resetRequestHeadersToAdds"></a>

```go
func ResetRequestHeadersToAdds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAdds">RequestHeadersToAdds</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAddsInput">RequestHeadersToAddsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA">ComputeSecurityPolicyRuleHeaderActionA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestHeadersToAdds`<sup>Required</sup> <a name="RequestHeadersToAdds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAdds"></a>

```go
func RequestHeadersToAdds() ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList">ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList</a>

---

##### `RequestHeadersToAddsInput`<sup>Optional</sup> <a name="RequestHeadersToAddsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.requestHeadersToAddsInput"></a>

```go
func RequestHeadersToAddsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleHeaderActionA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionA">ComputeSecurityPolicyRuleHeaderActionA</a>

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference <a name="ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderName">ResetHeaderName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderValue">ResetHeaderValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaderName` <a name="ResetHeaderName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderName"></a>

```go
func ResetHeaderName()
```

##### `ResetHeaderValue` <a name="ResetHeaderValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.resetHeaderValue"></a>

```go
func ResetHeaderValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValueInput">HeaderValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValue">HeaderValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `HeaderValueInput`<sup>Optional</sup> <a name="HeaderValueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValueInput"></a>

```go
func HeaderValueInput() *string
```

- *Type:* *string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `HeaderValue`<sup>Required</sup> <a name="HeaderValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.headerValue"></a>

```go
func HeaderValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleHeaderActionRequestHeadersToAddsAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleMatchAOutputReference <a name="ComputeSecurityPolicyRuleMatchAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleMatchAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions">PutExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExprOptions">ResetExprOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putConfig"></a>

```go
func PutConfig(value ComputeSecurityPolicyRuleMatchConfigA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExpr"></a>

```go
func PutExpr(value ComputeSecurityPolicyRuleMatchExprA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

---

##### `PutExprOptions` <a name="PutExprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions"></a>

```go
func PutExprOptions(value ComputeSecurityPolicyRuleMatchExprOptionsA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.putExprOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExpr"></a>

```go
func ResetExpr()
```

##### `ResetExprOptions` <a name="ResetExprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetExprOptions"></a>

```go
func ResetExprOptions()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.resetVersionedExpr"></a>

```go
func ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference">ComputeSecurityPolicyRuleMatchConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference">ComputeSecurityPolicyRuleMatchExprAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptions">ExprOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptionsInput">ExprOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.config"></a>

```go
func Config() ComputeSecurityPolicyRuleMatchConfigAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference">ComputeSecurityPolicyRuleMatchConfigAOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.expr"></a>

```go
func Expr() ComputeSecurityPolicyRuleMatchExprAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference">ComputeSecurityPolicyRuleMatchExprAOutputReference</a>

---

##### `ExprOptions`<sup>Required</sup> <a name="ExprOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptions"></a>

```go
func ExprOptions() ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.configInput"></a>

```go
func ConfigInput() ComputeSecurityPolicyRuleMatchConfigA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprInput"></a>

```go
func ExprInput() ComputeSecurityPolicyRuleMatchExprA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

---

##### `ExprOptionsInput`<sup>Optional</sup> <a name="ExprOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.exprOptionsInput"></a>

```go
func ExprOptionsInput() ComputeSecurityPolicyRuleMatchExprOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExprInput"></a>

```go
func VersionedExprInput() *string
```

- *Type:* *string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchA">ComputeSecurityPolicyRuleMatchA</a>

---


### ComputeSecurityPolicyRuleMatchConfigAOutputReference <a name="ComputeSecurityPolicyRuleMatchConfigAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleMatchConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchConfigA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchConfigA">ComputeSecurityPolicyRuleMatchConfigA</a>

---


### ComputeSecurityPolicyRuleMatchExprAOutputReference <a name="ComputeSecurityPolicyRuleMatchExprAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleMatchExprAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchExprAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchExprA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprA">ComputeSecurityPolicyRuleMatchExprA</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleMatchExprOptionsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions">PutRecaptchaOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecaptchaOptions` <a name="PutRecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions"></a>

```go
func PutRecaptchaOptions(value ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.putRecaptchaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptions">RecaptchaOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptionsInput">RecaptchaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecaptchaOptions`<sup>Required</sup> <a name="RecaptchaOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptions"></a>

```go
func RecaptchaOptions() ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference</a>

---

##### `RecaptchaOptionsInput`<sup>Optional</sup> <a name="RecaptchaOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.recaptchaOptionsInput"></a>

```go
func RecaptchaOptionsInput() ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchExprOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsA</a>

---


### ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference <a name="ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetActionTokenSiteKeys">ResetActionTokenSiteKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetSessionTokenSiteKeys">ResetSessionTokenSiteKeys</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionTokenSiteKeys` <a name="ResetActionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetActionTokenSiteKeys"></a>

```go
func ResetActionTokenSiteKeys()
```

##### `ResetSessionTokenSiteKeys` <a name="ResetSessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.resetSessionTokenSiteKeys"></a>

```go
func ResetSessionTokenSiteKeys()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeysInput">ActionTokenSiteKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeysInput">SessionTokenSiteKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeys">ActionTokenSiteKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeys">SessionTokenSiteKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionTokenSiteKeysInput`<sup>Optional</sup> <a name="ActionTokenSiteKeysInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeysInput"></a>

```go
func ActionTokenSiteKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SessionTokenSiteKeysInput`<sup>Optional</sup> <a name="SessionTokenSiteKeysInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeysInput"></a>

```go
func SessionTokenSiteKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ActionTokenSiteKeys`<sup>Required</sup> <a name="ActionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.actionTokenSiteKeys"></a>

```go
func ActionTokenSiteKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SessionTokenSiteKeys`<sup>Required</sup> <a name="SessionTokenSiteKeys" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.sessionTokenSiteKeys"></a>

```go
func SessionTokenSiteKeys() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA">ComputeSecurityPolicyRuleMatchExprOptionsRecaptchaOptionsA</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.putExclusion"></a>

```go
func PutExclusion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.putExclusion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.resetExclusion"></a>

```go
func ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA">ComputeSecurityPolicyRulePreconfiguredWafConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusion"></a>

```go
func Exclusion() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.exclusionInput"></a>

```go
func ExclusionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRulePreconfiguredWafConfigA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigA">ComputeSecurityPolicyRulePreconfiguredWafConfigA</a>

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestCookie"></a>

```go
func PutRequestCookie(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestQueryParam"></a>

```go
func PutRequestQueryParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestUri"></a>

```go
func PutRequestUri(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.putRequestUri.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestCookie"></a>

```go
func ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestQueryParam"></a>

```go
func ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetRequestUri"></a>

```go
func ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.resetTargetRuleIds"></a>

```go
func ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookie"></a>

```go
func RequestCookie() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeader"></a>

```go
func RequestHeader() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParam"></a>

```go
func RequestQueryParam() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUri"></a>

```go
func RequestUri() ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList">ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestCookieInput"></a>

```go
func RequestCookieInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestQueryParamInput"></a>

```go
func RequestQueryParamInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIdsInput"></a>

```go
func TargetRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSetInput"></a>

```go
func TargetRuleSetInput() *string
```

- *Type:* *string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleIds"></a>

```go
func TargetRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.targetRuleSet"></a>

```go
func TargetRuleSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference <a name="ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriAOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleRateLimitOptionsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold">PutBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs">PutEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions">PutExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold">PutRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanDurationSec">ResetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanThreshold">ResetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetConformAction">ResetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKey">ResetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyConfigs">ResetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedAction">ResetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedRedirectOptions">ResetExceedRedirectOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetRateLimitThreshold">ResetRateLimitThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBanThreshold` <a name="PutBanThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold"></a>

```go
func PutBanThreshold(value ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---

##### `PutEnforceOnKeyConfigs` <a name="PutEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs"></a>

```go
func PutEnforceOnKeyConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutExceedRedirectOptions` <a name="PutExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions"></a>

```go
func PutExceedRedirectOptions(value ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putExceedRedirectOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---

##### `PutRateLimitThreshold` <a name="PutRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold"></a>

```go
func PutRateLimitThreshold(value ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---

##### `ResetBanDurationSec` <a name="ResetBanDurationSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanDurationSec"></a>

```go
func ResetBanDurationSec()
```

##### `ResetBanThreshold` <a name="ResetBanThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetBanThreshold"></a>

```go
func ResetBanThreshold()
```

##### `ResetConformAction` <a name="ResetConformAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetConformAction"></a>

```go
func ResetConformAction()
```

##### `ResetEnforceOnKey` <a name="ResetEnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKey"></a>

```go
func ResetEnforceOnKey()
```

##### `ResetEnforceOnKeyConfigs` <a name="ResetEnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyConfigs"></a>

```go
func ResetEnforceOnKeyConfigs()
```

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetExceedAction` <a name="ResetExceedAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedAction"></a>

```go
func ResetExceedAction()
```

##### `ResetExceedRedirectOptions` <a name="ResetExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetExceedRedirectOptions"></a>

```go
func ResetExceedRedirectOptions()
```

##### `ResetRateLimitThreshold` <a name="ResetRateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.resetRateLimitThreshold"></a>

```go
func ResetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptions">ExceedRedirectOptions</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSecInput">BanDurationSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThresholdInput">BanThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformActionInput">ConformActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigsInput">EnforceOnKeyConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyInput">EnforceOnKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedActionInput">ExceedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptionsInput">ExceedRedirectOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformAction">ConformAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThreshold"></a>

```go
func BanThreshold() ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference</a>

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigs"></a>

```go
func EnforceOnKeyConfigs() ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `ExceedRedirectOptions`<sup>Required</sup> <a name="ExceedRedirectOptions" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptions"></a>

```go
func ExceedRedirectOptions() ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThreshold"></a>

```go
func RateLimitThreshold() ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference</a>

---

##### `BanDurationSecInput`<sup>Optional</sup> <a name="BanDurationSecInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSecInput"></a>

```go
func BanDurationSecInput() *f64
```

- *Type:* *f64

---

##### `BanThresholdInput`<sup>Optional</sup> <a name="BanThresholdInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banThresholdInput"></a>

```go
func BanThresholdInput() ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---

##### `ConformActionInput`<sup>Optional</sup> <a name="ConformActionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformActionInput"></a>

```go
func ConformActionInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyConfigsInput`<sup>Optional</sup> <a name="EnforceOnKeyConfigsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyConfigsInput"></a>

```go
func EnforceOnKeyConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceOnKeyInput`<sup>Optional</sup> <a name="EnforceOnKeyInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyInput"></a>

```go
func EnforceOnKeyInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `ExceedActionInput`<sup>Optional</sup> <a name="ExceedActionInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedActionInput"></a>

```go
func ExceedActionInput() *string
```

- *Type:* *string

---

##### `ExceedRedirectOptionsInput`<sup>Optional</sup> <a name="ExceedRedirectOptionsInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedRedirectOptionsInput"></a>

```go
func ExceedRedirectOptionsInput() ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.rateLimitThresholdInput"></a>

```go
func RateLimitThresholdInput() ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.banDurationSec"></a>

```go
func BanDurationSec() *f64
```

- *Type:* *f64

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.conformAction"></a>

```go
func ConformAction() *string
```

- *Type:* *string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKey"></a>

```go
func EnforceOnKey() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.exceedAction"></a>

```go
func ExceedAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsA</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsBanThresholdA</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```go
func Get(index *f64) ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">ResetEnforceOnKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetEnforceOnKeyType` <a name="ResetEnforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```go
func ResetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">EnforceOnKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyTypeInput`<sup>Optional</sup> <a name="EnforceOnKeyTypeInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```go
func EnforceOnKeyTypeInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```go
func EnforceOnKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA">ComputeSecurityPolicyRuleRateLimitOptionsExceedRedirectOptionsA</a>

---


### ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference <a name="ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA">ComputeSecurityPolicyRuleRateLimitOptionsRateLimitThresholdA</a>

---


### ComputeSecurityPolicyRuleRedirectOptionsAOutputReference <a name="ComputeSecurityPolicyRuleRedirectOptionsAOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleRedirectOptionsAOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleRedirectOptionsAOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetTarget"></a>

```go
func ResetTarget()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.targetInput">TargetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.target">Target</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA">ComputeSecurityPolicyRuleRedirectOptionsA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.targetInput"></a>

```go
func TargetInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.target"></a>

```go
func Target() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsAOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeSecurityPolicyRuleRedirectOptionsA
```

- *Type:* <a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleRedirectOptionsA">ComputeSecurityPolicyRuleRedirectOptionsA</a>

---


### ComputeSecurityPolicyRuleTimeoutsOutputReference <a name="ComputeSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computesecuritypolicyrule"

computesecuritypolicyrule.NewComputeSecurityPolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeSecurityPolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeSecurityPolicyRule.ComputeSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



