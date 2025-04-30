# `computeRegionSecurityPolicyRule` Submodule <a name="`computeRegionSecurityPolicyRule` Submodule" id="@cdktf/provider-google.computeRegionSecurityPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSecurityPolicyRule <a name="ComputeRegionSecurityPolicyRule" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule google_compute_region_security_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRule(scope Construct, id *string, config ComputeRegionSecurityPolicyRuleConfig) ComputeRegionSecurityPolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig">ComputeRegionSecurityPolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig">ComputeRegionSecurityPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putNetworkMatch">PutNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putRateLimitOptions">PutRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetNetworkMatch">ResetNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetRateLimitOptions">ResetRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putMatch"></a>

```go
func PutMatch(value ComputeRegionSecurityPolicyRuleMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch">ComputeRegionSecurityPolicyRuleMatch</a>

---

##### `PutNetworkMatch` <a name="PutNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putNetworkMatch"></a>

```go
func PutNetworkMatch(value ComputeRegionSecurityPolicyRuleNetworkMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putNetworkMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch">ComputeRegionSecurityPolicyRuleNetworkMatch</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putPreconfiguredWafConfig"></a>

```go
func PutPreconfiguredWafConfig(value ComputeRegionSecurityPolicyRulePreconfiguredWafConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig">ComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `PutRateLimitOptions` <a name="PutRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putRateLimitOptions"></a>

```go
func PutRateLimitOptions(value ComputeRegionSecurityPolicyRuleRateLimitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions">ComputeRegionSecurityPolicyRuleRateLimitOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionSecurityPolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts">ComputeRegionSecurityPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetNetworkMatch` <a name="ResetNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetNetworkMatch"></a>

```go
func ResetNetworkMatch()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetPreconfiguredWafConfig"></a>

```go
func ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRateLimitOptions` <a name="ResetRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetRateLimitOptions"></a>

```go
func ResetRateLimitOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionSecurityPolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeRegionSecurityPolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeRegionSecurityPolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeRegionSecurityPolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionSecurityPolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference">ComputeRegionSecurityPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference">ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference">ComputeRegionSecurityPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch">ComputeRegionSecurityPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.networkMatchInput">NetworkMatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch">ComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig">ComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.previewInput">PreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.rateLimitOptionsInput">RateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions">ComputeRegionSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.securityPolicyInput">SecurityPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.preview">Preview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.match"></a>

```go
func Match() ComputeRegionSecurityPolicyRuleMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference">ComputeRegionSecurityPolicyRuleMatchOutputReference</a>

---

##### `NetworkMatch`<sup>Required</sup> <a name="NetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.networkMatch"></a>

```go
func NetworkMatch() ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference">ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.preconfiguredWafConfig"></a>

```go
func PreconfiguredWafConfig() ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference</a>

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.rateLimitOptions"></a>

```go
func RateLimitOptions() ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.timeouts"></a>

```go
func Timeouts() ComputeRegionSecurityPolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference">ComputeRegionSecurityPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.matchInput"></a>

```go
func MatchInput() ComputeRegionSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch">ComputeRegionSecurityPolicyRuleMatch</a>

---

##### `NetworkMatchInput`<sup>Optional</sup> <a name="NetworkMatchInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.networkMatchInput"></a>

```go
func NetworkMatchInput() ComputeRegionSecurityPolicyRuleNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch">ComputeRegionSecurityPolicyRuleNetworkMatch</a>

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.preconfiguredWafConfigInput"></a>

```go
func PreconfiguredWafConfigInput() ComputeRegionSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig">ComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.previewInput"></a>

```go
func PreviewInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RateLimitOptionsInput`<sup>Optional</sup> <a name="RateLimitOptionsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.rateLimitOptionsInput"></a>

```go
func RateLimitOptionsInput() ComputeRegionSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions">ComputeRegionSecurityPolicyRuleRateLimitOptions</a>

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityPolicyInput`<sup>Optional</sup> <a name="SecurityPolicyInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.securityPolicyInput"></a>

```go
func SecurityPolicyInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.preview"></a>

```go
func Preview() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.securityPolicy"></a>

```go
func SecurityPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSecurityPolicyRuleConfig <a name="ComputeRegionSecurityPolicyRuleConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Priority: *f64,
	Region: *string,
	SecurityPolicy: *string,
	Description: *string,
	Id: *string,
	Match: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch,
	NetworkMatch: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch,
	PreconfiguredWafConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig,
	Preview: interface{},
	Project: *string,
	RateLimitOptions: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created Region Security Policy rule should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.securityPolicy">SecurityPolicy</a></code> | <code>*string</code> | The name of the security policy this rule belongs to. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#id ComputeRegionSecurityPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch">ComputeRegionSecurityPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch">ComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig">ComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.preview">Preview</a></code> | <code>interface{}</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#project ComputeRegionSecurityPolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions">ComputeRegionSecurityPolicyRuleRateLimitOptions</a></code> | rate_limit_options block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts">ComputeRegionSecurityPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.action"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#action ComputeRegionSecurityPolicyRule#action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#priority ComputeRegionSecurityPolicyRule#priority}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created Region Security Policy rule should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#region ComputeRegionSecurityPolicyRule#region}

---

##### `SecurityPolicy`<sup>Required</sup> <a name="SecurityPolicy" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.securityPolicy"></a>

```go
SecurityPolicy *string
```

- *Type:* *string

The name of the security policy this rule belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#security_policy ComputeRegionSecurityPolicyRule#security_policy}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#description ComputeRegionSecurityPolicyRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#id ComputeRegionSecurityPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.match"></a>

```go
Match ComputeRegionSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch">ComputeRegionSecurityPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#match ComputeRegionSecurityPolicyRule#match}

---

##### `NetworkMatch`<sup>Optional</sup> <a name="NetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.networkMatch"></a>

```go
NetworkMatch ComputeRegionSecurityPolicyRuleNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch">ComputeRegionSecurityPolicyRuleNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#network_match ComputeRegionSecurityPolicyRule#network_match}

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.preconfiguredWafConfig"></a>

```go
PreconfiguredWafConfig ComputeRegionSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig">ComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#preconfigured_waf_config ComputeRegionSecurityPolicyRule#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.preview"></a>

```go
Preview interface{}
```

- *Type:* interface{}

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#preview ComputeRegionSecurityPolicyRule#preview}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#project ComputeRegionSecurityPolicyRule#project}.

---

##### `RateLimitOptions`<sup>Optional</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.rateLimitOptions"></a>

```go
RateLimitOptions ComputeRegionSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions">ComputeRegionSecurityPolicyRuleRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#rate_limit_options ComputeRegionSecurityPolicyRule#rate_limit_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionSecurityPolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts">ComputeRegionSecurityPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#timeouts ComputeRegionSecurityPolicyRule#timeouts}

---

### ComputeRegionSecurityPolicyRuleMatch <a name="ComputeRegionSecurityPolicyRuleMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleMatch {
	Config: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig,
	Expr: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr,
	VersionedExpr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig">ComputeRegionSecurityPolicyRuleMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr">ComputeRegionSecurityPolicyRuleMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | Preconfigured versioned expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch.property.config"></a>

```go
Config ComputeRegionSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig">ComputeRegionSecurityPolicyRuleMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#config ComputeRegionSecurityPolicyRule#config}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch.property.expr"></a>

```go
Expr ComputeRegionSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr">ComputeRegionSecurityPolicyRuleMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#expr ComputeRegionSecurityPolicyRule#expr}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch.property.versionedExpr"></a>

```go
VersionedExpr *string
```

- *Type:* *string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#versioned_expr ComputeRegionSecurityPolicyRule#versioned_expr}

---

### ComputeRegionSecurityPolicyRuleMatchConfig <a name="ComputeRegionSecurityPolicyRuleMatchConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleMatchConfig {
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#src_ip_ranges ComputeRegionSecurityPolicyRule#src_ip_ranges}

---

### ComputeRegionSecurityPolicyRuleMatchExpr <a name="ComputeRegionSecurityPolicyRuleMatchExpr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleMatchExpr {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#expression ComputeRegionSecurityPolicyRule#expression}

---

### ComputeRegionSecurityPolicyRuleNetworkMatch <a name="ComputeRegionSecurityPolicyRuleNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleNetworkMatch {
	DestIpRanges: *[]*string,
	DestPorts: *[]*string,
	IpProtocols: *[]*string,
	SrcAsns: *[]*f64,
	SrcIpRanges: *[]*string,
	SrcPorts: *[]*string,
	SrcRegionCodes: *[]*string,
	UserDefinedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.destPorts">DestPorts</a></code> | <code>*[]*string</code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcAsns">SrcAsns</a></code> | <code>*[]*f64</code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcPorts">SrcPorts</a></code> | <code>*[]*string</code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.userDefinedFields">UserDefinedFields</a></code> | <code>interface{}</code> | user_defined_fields block. |

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#dest_ip_ranges ComputeRegionSecurityPolicyRule#dest_ip_ranges}

---

##### `DestPorts`<sup>Optional</sup> <a name="DestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.destPorts"></a>

```go
DestPorts *[]*string
```

- *Type:* *[]*string

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#dest_ports ComputeRegionSecurityPolicyRule#dest_ports}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.ipProtocols"></a>

```go
IpProtocols *[]*string
```

- *Type:* *[]*string

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#ip_protocols ComputeRegionSecurityPolicyRule#ip_protocols}

---

##### `SrcAsns`<sup>Optional</sup> <a name="SrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcAsns"></a>

```go
SrcAsns *[]*f64
```

- *Type:* *[]*f64

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#src_asns ComputeRegionSecurityPolicyRule#src_asns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#src_ip_ranges ComputeRegionSecurityPolicyRule#src_ip_ranges}

---

##### `SrcPorts`<sup>Optional</sup> <a name="SrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcPorts"></a>

```go
SrcPorts *[]*string
```

- *Type:* *[]*string

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#src_ports ComputeRegionSecurityPolicyRule#src_ports}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.srcRegionCodes"></a>

```go
SrcRegionCodes *[]*string
```

- *Type:* *[]*string

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#src_region_codes ComputeRegionSecurityPolicyRule#src_region_codes}

---

##### `UserDefinedFields`<sup>Optional</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch.property.userDefinedFields"></a>

```go
UserDefinedFields interface{}
```

- *Type:* interface{}

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#user_defined_fields ComputeRegionSecurityPolicyRule#user_defined_fields}

---

### ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields <a name="ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.name">Name</a></code> | <code>*string</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.values">Values</a></code> | <code>*[]*string</code> | Matching values of the field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#name ComputeRegionSecurityPolicyRule#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFields.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#values ComputeRegionSecurityPolicyRule#values}

---

### ComputeRegionSecurityPolicyRulePreconfiguredWafConfig <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig {
	Exclusion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig.property.exclusion">Exclusion</a></code> | <code>interface{}</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig.property.exclusion"></a>

```go
Exclusion interface{}
```

- *Type:* interface{}

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#exclusion ComputeRegionSecurityPolicyRule#exclusion}

---

### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion {
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
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie">RequestCookie</a></code> | <code>interface{}</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam">RequestQueryParam</a></code> | <code>interface{}</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri">RequestUri</a></code> | <code>interface{}</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```go
TargetRuleSet *string
```

- *Type:* *string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#target_rule_set ComputeRegionSecurityPolicyRule#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestCookie"></a>

```go
RequestCookie interface{}
```

- *Type:* interface{}

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#request_cookie ComputeRegionSecurityPolicyRule#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#request_header ComputeRegionSecurityPolicyRule#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```go
RequestQueryParam interface{}
```

- *Type:* interface{}

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#request_query_param ComputeRegionSecurityPolicyRule#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.requestUri"></a>

```go
RequestUri interface{}
```

- *Type:* interface{}

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#request_uri ComputeRegionSecurityPolicyRule#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```go
TargetRuleIds *[]*string
```

- *Type:* *[]*string

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#target_rule_ids ComputeRegionSecurityPolicyRule#target_rule_ids}

---

### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

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
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#operator ComputeRegionSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#value ComputeRegionSecurityPolicyRule#value}

---

### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

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
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#operator ComputeRegionSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#value ComputeRegionSecurityPolicyRule#value}

---

### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

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
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#operator ComputeRegionSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#value ComputeRegionSecurityPolicyRule#value}

---

### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

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
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#operator ComputeRegionSecurityPolicyRule#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#value ComputeRegionSecurityPolicyRule#value}

---

### ComputeRegionSecurityPolicyRuleRateLimitOptions <a name="ComputeRegionSecurityPolicyRuleRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleRateLimitOptions {
	BanDurationSec: *f64,
	BanThreshold: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold,
	ConformAction: *string,
	EnforceOnKey: *string,
	EnforceOnKeyConfigs: interface{},
	EnforceOnKeyName: *string,
	ExceedAction: *string,
	RateLimitThreshold: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.conformAction">ConformAction</a></code> | <code>*string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code>interface{}</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |

---

##### `BanDurationSec`<sup>Optional</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.banDurationSec"></a>

```go
BanDurationSec *f64
```

- *Type:* *f64

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#ban_duration_sec ComputeRegionSecurityPolicyRule#ban_duration_sec}

---

##### `BanThreshold`<sup>Optional</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.banThreshold"></a>

```go
BanThreshold ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#ban_threshold ComputeRegionSecurityPolicyRule#ban_threshold}

---

##### `ConformAction`<sup>Optional</sup> <a name="ConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.conformAction"></a>

```go
ConformAction *string
```

- *Type:* *string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#conform_action ComputeRegionSecurityPolicyRule#conform_action}

---

##### `EnforceOnKey`<sup>Optional</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKey"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#enforce_on_key ComputeRegionSecurityPolicyRule#enforce_on_key}

---

##### `EnforceOnKeyConfigs`<sup>Optional</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyConfigs"></a>

```go
EnforceOnKeyConfigs interface{}
```

- *Type:* interface{}

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#enforce_on_key_configs ComputeRegionSecurityPolicyRule#enforce_on_key_configs}

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#enforce_on_key_name ComputeRegionSecurityPolicyRule#enforce_on_key_name}

---

##### `ExceedAction`<sup>Optional</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.exceedAction"></a>

```go
ExceedAction *string
```

- *Type:* *string

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#exceed_action ComputeRegionSecurityPolicyRule#exceed_action}

---

##### `RateLimitThreshold`<sup>Optional</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions.property.rateLimitThreshold"></a>

```go
RateLimitThreshold ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#rate_limit_threshold ComputeRegionSecurityPolicyRule#rate_limit_threshold}

---

### ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#count ComputeRegionSecurityPolicyRule#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#interval_sec ComputeRegionSecurityPolicyRule#interval_sec}

---

### ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs {
	EnforceOnKeyName: *string,
	EnforceOnKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#enforce_on_key_name ComputeRegionSecurityPolicyRule#enforce_on_key_name}

---

##### `EnforceOnKeyType`<sup>Optional</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#enforce_on_key_type ComputeRegionSecurityPolicyRule#enforce_on_key_type}

---

### ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#count ComputeRegionSecurityPolicyRule#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#interval_sec ComputeRegionSecurityPolicyRule#interval_sec}

---

### ComputeRegionSecurityPolicyRuleTimeouts <a name="ComputeRegionSecurityPolicyRuleTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

&computeregionsecuritypolicyrule.ComputeRegionSecurityPolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#create ComputeRegionSecurityPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#delete ComputeRegionSecurityPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#update ComputeRegionSecurityPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#create ComputeRegionSecurityPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#delete ComputeRegionSecurityPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/compute_region_security_policy_rule#update ComputeRegionSecurityPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSecurityPolicyRuleMatchConfigOutputReference <a name="ComputeRegionSecurityPolicyRuleMatchConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleMatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleMatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig">ComputeRegionSecurityPolicyRuleMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig">ComputeRegionSecurityPolicyRuleMatchConfig</a>

---


### ComputeRegionSecurityPolicyRuleMatchExprOutputReference <a name="ComputeRegionSecurityPolicyRuleMatchExprOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleMatchExprOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleMatchExprOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr">ComputeRegionSecurityPolicyRuleMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr">ComputeRegionSecurityPolicyRuleMatchExpr</a>

---


### ComputeRegionSecurityPolicyRuleMatchOutputReference <a name="ComputeRegionSecurityPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig"></a>

```go
func PutConfig(value ComputeRegionSecurityPolicyRuleMatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig">ComputeRegionSecurityPolicyRuleMatchConfig</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.putExpr"></a>

```go
func PutExpr(value ComputeRegionSecurityPolicyRuleMatchExpr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr">ComputeRegionSecurityPolicyRuleMatchExpr</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resetExpr"></a>

```go
func ResetExpr()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.resetVersionedExpr"></a>

```go
func ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference">ComputeRegionSecurityPolicyRuleMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference">ComputeRegionSecurityPolicyRuleMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig">ComputeRegionSecurityPolicyRuleMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr">ComputeRegionSecurityPolicyRuleMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch">ComputeRegionSecurityPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.config"></a>

```go
func Config() ComputeRegionSecurityPolicyRuleMatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfigOutputReference">ComputeRegionSecurityPolicyRuleMatchConfigOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.expr"></a>

```go
func Expr() ComputeRegionSecurityPolicyRuleMatchExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExprOutputReference">ComputeRegionSecurityPolicyRuleMatchExprOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.configInput"></a>

```go
func ConfigInput() ComputeRegionSecurityPolicyRuleMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchConfig">ComputeRegionSecurityPolicyRuleMatchConfig</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.exprInput"></a>

```go
func ExprInput() ComputeRegionSecurityPolicyRuleMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchExpr">ComputeRegionSecurityPolicyRuleMatchExpr</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExprInput"></a>

```go
func VersionedExprInput() *string
```

- *Type:* *string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRuleMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleMatch">ComputeRegionSecurityPolicyRuleMatch</a>

---


### ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference <a name="ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleNetworkMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields">PutUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestPorts">ResetDestPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcAsns">ResetSrcAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcPorts">ResetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetUserDefinedFields">ResetUserDefinedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserDefinedFields` <a name="PutUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields"></a>

```go
func PutUserDefinedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetDestPorts` <a name="ResetDestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetDestPorts"></a>

```go
func ResetDestPorts()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetIpProtocols"></a>

```go
func ResetIpProtocols()
```

##### `ResetSrcAsns` <a name="ResetSrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcAsns"></a>

```go
func ResetSrcAsns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```

##### `ResetSrcPorts` <a name="ResetSrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcPorts"></a>

```go
func ResetSrcPorts()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```go
func ResetSrcRegionCodes()
```

##### `ResetUserDefinedFields` <a name="ResetUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.resetUserDefinedFields"></a>

```go
func ResetUserDefinedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPortsInput">DestPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsnsInput">SrcAsnsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPortsInput">SrcPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFieldsInput">UserDefinedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPorts">DestPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsns">SrcAsns</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPorts">SrcPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch">ComputeRegionSecurityPolicyRuleNetworkMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFields"></a>

```go
func UserDefinedFields() ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestPortsInput`<sup>Optional</sup> <a name="DestPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPortsInput"></a>

```go
func DestPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```go
func IpProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAsnsInput`<sup>Optional</sup> <a name="SrcAsnsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsnsInput"></a>

```go
func SrcAsnsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcPortsInput`<sup>Optional</sup> <a name="SrcPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPortsInput"></a>

```go
func SrcPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```go
func SrcRegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserDefinedFieldsInput`<sup>Optional</sup> <a name="UserDefinedFieldsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```go
func UserDefinedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `DestPorts`<sup>Required</sup> <a name="DestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.destPorts"></a>

```go
func DestPorts() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.ipProtocols"></a>

```go
func IpProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAsns`<sup>Required</sup> <a name="SrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcAsns"></a>

```go
func SrcAsns() *[]*f64
```

- *Type:* *[]*f64

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcPorts`<sup>Required</sup> <a name="SrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcPorts"></a>

```go
func SrcPorts() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.srcRegionCodes"></a>

```go
func SrcRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRuleNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatch">ComputeRegionSecurityPolicyRuleNetworkMatch</a>

---


### ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList <a name="ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference <a name="ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```go
func PutRequestCookie(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```go
func PutRequestQueryParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```go
func PutRequestUri(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```go
func ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```go
func ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```go
func ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```go
func ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```go
func RequestCookie() ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```go
func RequestHeader() ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```go
func RequestQueryParam() ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```go
func RequestUri() ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```go
func RequestCookieInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```go
func RequestQueryParamInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```go
func TargetRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```go
func TargetRuleSetInput() *string
```

- *Type:* *string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```go
func TargetRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```go
func TargetRuleSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference <a name="ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion"></a>

```go
func PutExclusion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.resetExclusion"></a>

```go
func ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig">ComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusion"></a>

```go
func Exclusion() ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulePreconfiguredWafConfigExclusionList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```go
func ExclusionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulePreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRulePreconfiguredWafConfig">ComputeRegionSecurityPolicyRulePreconfiguredWafConfig</a>

---


### ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---


### ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">ResetEnforceOnKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetEnforceOnKeyType` <a name="ResetEnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```go
func ResetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">EnforceOnKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyTypeInput`<sup>Optional</sup> <a name="EnforceOnKeyTypeInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```go
func EnforceOnKeyTypeInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```go
func EnforceOnKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold">PutBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">PutEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold">PutRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec">ResetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold">ResetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetConformAction">ResetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey">ResetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">ResetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedAction">ResetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetRateLimitThreshold">ResetRateLimitThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBanThreshold` <a name="PutBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold"></a>

```go
func PutBanThreshold(value ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `PutEnforceOnKeyConfigs` <a name="PutEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```go
func PutEnforceOnKeyConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRateLimitThreshold` <a name="PutRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```go
func PutRateLimitThreshold(value ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `ResetBanDurationSec` <a name="ResetBanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```go
func ResetBanDurationSec()
```

##### `ResetBanThreshold` <a name="ResetBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetBanThreshold"></a>

```go
func ResetBanThreshold()
```

##### `ResetConformAction` <a name="ResetConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetConformAction"></a>

```go
func ResetConformAction()
```

##### `ResetEnforceOnKey` <a name="ResetEnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```go
func ResetEnforceOnKey()
```

##### `ResetEnforceOnKeyConfigs` <a name="ResetEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```go
func ResetEnforceOnKeyConfigs()
```

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetExceedAction` <a name="ResetExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetExceedAction"></a>

```go
func ResetExceedAction()
```

##### `ResetRateLimitThreshold` <a name="ResetRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.resetRateLimitThreshold"></a>

```go
func ResetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput">BanDurationSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput">BanThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput">ConformActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">EnforceOnKeyConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput">EnforceOnKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput">ExceedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions">ComputeRegionSecurityPolicyRuleRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThreshold"></a>

```go
func BanThreshold() ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThresholdOutputReference</a>

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```go
func EnforceOnKeyConfigs() ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRuleRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```go
func RateLimitThreshold() ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `BanDurationSecInput`<sup>Optional</sup> <a name="BanDurationSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```go
func BanDurationSecInput() *f64
```

- *Type:* *f64

---

##### `BanThresholdInput`<sup>Optional</sup> <a name="BanThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```go
func BanThresholdInput() ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsBanThreshold</a>

---

##### `ConformActionInput`<sup>Optional</sup> <a name="ConformActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformActionInput"></a>

```go
func ConformActionInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyConfigsInput`<sup>Optional</sup> <a name="EnforceOnKeyConfigsInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```go
func EnforceOnKeyConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceOnKeyInput`<sup>Optional</sup> <a name="EnforceOnKeyInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```go
func EnforceOnKeyInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `ExceedActionInput`<sup>Optional</sup> <a name="ExceedActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```go
func ExceedActionInput() *string
```

- *Type:* *string

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```go
func RateLimitThresholdInput() ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.banDurationSec"></a>

```go
func BanDurationSec() *f64
```

- *Type:* *f64

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.conformAction"></a>

```go
func ConformAction() *string
```

- *Type:* *string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```go
func EnforceOnKey() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.exceedAction"></a>

```go
func ExceedAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRuleRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptions">ComputeRegionSecurityPolicyRuleRateLimitOptions</a>

---


### ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference <a name="ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRuleRateLimitOptionsRateLimitThreshold</a>

---


### ComputeRegionSecurityPolicyRuleTimeoutsOutputReference <a name="ComputeRegionSecurityPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicyrule"

computeregionsecuritypolicyrule.NewComputeRegionSecurityPolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicyRule.ComputeRegionSecurityPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



