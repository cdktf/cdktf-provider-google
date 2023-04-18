# `google_compute_network_firewall_policy_rule`

Refer to the Terraform Registory for docs: [`google_compute_network_firewall_policy_rule`](https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule).

# `computeNetworkFirewallPolicyRule` Submodule <a name="`computeNetworkFirewallPolicyRule` Submodule" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkFirewallPolicyRule <a name="ComputeNetworkFirewallPolicyRule" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule google_compute_network_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRule(Construct Scope, string Id, ComputeNetworkFirewallPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig">ComputeNetworkFirewallPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig">ComputeNetworkFirewallPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTargetSecureTags">PutTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetSecureTags">ResetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch"></a>

```csharp
private void PutMatch(ComputeNetworkFirewallPolicyRuleMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

---

##### `PutTargetSecureTags` <a name="PutTargetSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTargetSecureTags"></a>

```csharp
private void PutTargetSecureTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTargetSecureTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeNetworkFirewallPolicyRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetTargetSecureTags` <a name="ResetTargetSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetSecureTags"></a>

```csharp
private void ResetTargetSecureTags()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTargetServiceAccounts"></a>

```csharp
private void ResetTargetServiceAccounts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkFirewallPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkFirewallPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkFirewallPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference">ComputeNetworkFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleTupleCount">RuleTupleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTags">TargetSecureTags</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList">ComputeNetworkFirewallPolicyRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference">ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTagsInput">TargetSecureTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicy">FirewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.match"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference">ComputeNetworkFirewallPolicyRuleMatchOutputReference</a>

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleTupleCount"></a>

```csharp
public double RuleTupleCount { get; }
```

- *Type:* double

---

##### `TargetSecureTags`<sup>Required</sup> <a name="TargetSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTags"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleTargetSecureTagsList TargetSecureTags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList">ComputeNetworkFirewallPolicyRuleTargetSecureTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeouts"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference">ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicyInput"></a>

```csharp
public string FirewallPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.matchInput"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `TargetSecureTagsInput`<sup>Optional</sup> <a name="TargetSecureTagsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetSecureTagsInput"></a>

```csharp
public object TargetSecureTagsInput { get; }
```

- *Type:* object

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```csharp
public string[] TargetServiceAccountsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.firewallPolicy"></a>

```csharp
public string FirewallPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkFirewallPolicyRuleConfig <a name="ComputeNetworkFirewallPolicyRuleConfig" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string Direction,
    string FirewallPolicy,
    ComputeNetworkFirewallPolicyRuleMatch Match,
    double Priority,
    string Description = null,
    object Disabled = null,
    object EnableLogging = null,
    string Id = null,
    string Project = null,
    string RuleName = null,
    object TargetSecureTags = null,
    string[] TargetServiceAccounts = null,
    ComputeNetworkFirewallPolicyRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.action">Action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.direction">Direction</a></code> | <code>string</code> | The direction in which this rule applies. Possible values: INGRESS, EGRESS. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.priority">Priority</a></code> | <code>double</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.description">Description</a></code> | <code>string</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.disabled">Disabled</a></code> | <code>object</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#id ComputeNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetSecureTags">TargetSecureTags</a></code> | <code>object</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The Action to perform when the client connection triggers the rule.

Can currently be either "allow" or "deny()" where valid values for status are 403, 404, and 502.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#action ComputeNetworkFirewallPolicyRule#action}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction in which this rule applies. Possible values: INGRESS, EGRESS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#direction ComputeNetworkFirewallPolicyRule#direction}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```csharp
public string FirewallPolicy { get; set; }
```

- *Type:* string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#firewall_policy ComputeNetworkFirewallPolicyRule#firewall_policy}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.match"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#match ComputeNetworkFirewallPolicyRule#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#priority ComputeNetworkFirewallPolicyRule#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description for this resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#description ComputeNetworkFirewallPolicyRule#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#disabled ComputeNetworkFirewallPolicyRule#disabled}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#enable_logging ComputeNetworkFirewallPolicyRule#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#id ComputeNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#project ComputeNetworkFirewallPolicyRule#project}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#rule_name ComputeNetworkFirewallPolicyRule#rule_name}

---

##### `TargetSecureTags`<sup>Optional</sup> <a name="TargetSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetSecureTags"></a>

```csharp
public object TargetSecureTags { get; set; }
```

- *Type:* object

target_secure_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#target_secure_tags ComputeNetworkFirewallPolicyRule#target_secure_tags}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; set; }
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#target_service_accounts ComputeNetworkFirewallPolicyRule#target_service_accounts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleConfig.property.timeouts"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts">ComputeNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#timeouts ComputeNetworkFirewallPolicyRule#timeouts}

---

### ComputeNetworkFirewallPolicyRuleMatch <a name="ComputeNetworkFirewallPolicyRuleMatch" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatch {
    object Layer4Configs,
    string[] DestIpRanges = null,
    string[] SrcIpRanges = null,
    object SrcSecureTags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.layer4Configs">Layer4Configs</a></code> | <code>object</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcSecureTags">SrcSecureTags</a></code> | <code>object</code> | src_secure_tags block. |

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.layer4Configs"></a>

```csharp
public object Layer4Configs { get; set; }
```

- *Type:* object

layer4_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#layer4_configs ComputeNetworkFirewallPolicyRule#layer4_configs}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; set; }
```

- *Type:* string[]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#dest_ip_ranges ComputeNetworkFirewallPolicyRule#dest_ip_ranges}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#src_ip_ranges ComputeNetworkFirewallPolicyRule#src_ip_ranges}

---

##### `SrcSecureTags`<sup>Optional</sup> <a name="SrcSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch.property.srcSecureTags"></a>

```csharp
public object SrcSecureTags { get; set; }
```

- *Type:* object

src_secure_tags block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#src_secure_tags ComputeNetworkFirewallPolicyRule#src_secure_tags}

---

### ComputeNetworkFirewallPolicyRuleMatchLayer4Configs <a name="ComputeNetworkFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatchLayer4Configs {
    string IpProtocol,
    string[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports">Ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#ip_protocol ComputeNetworkFirewallPolicyRule#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#ports ComputeNetworkFirewallPolicyRule#ports}

---

### ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags <a name="ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name">Name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#name ComputeNetworkFirewallPolicyRule#name}

---

### ComputeNetworkFirewallPolicyRuleTargetSecureTags <a name="ComputeNetworkFirewallPolicyRuleTargetSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleTargetSecureTags {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags.property.name">Name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTags.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API. @pattern tagValues/[0-9]+.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#name ComputeNetworkFirewallPolicyRule#name}

---

### ComputeNetworkFirewallPolicyRuleTimeouts <a name="ComputeNetworkFirewallPolicyRuleTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#create ComputeNetworkFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#delete ComputeNetworkFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#update ComputeNetworkFirewallPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#create ComputeNetworkFirewallPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#delete ComputeNetworkFirewallPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_network_firewall_policy_rule#update ComputeNetworkFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList <a name="ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```csharp
private ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNetworkFirewallPolicyRuleMatchOutputReference <a name="ComputeNetworkFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs">PutLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags">PutSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags">ResetSrcSecureTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Configs` <a name="PutLayer4Configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```csharp
private void PutLayer4Configs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* object

---

##### `PutSrcSecureTags` <a name="PutSrcSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags"></a>

```csharp
private void PutSrcSecureTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags.parameter.value"></a>

- *Type:* object

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```csharp
private void ResetDestIpRanges()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```

##### `ResetSrcSecureTags` <a name="ResetSrcSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags"></a>

```csharp
private void ResetSrcSecureTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs">Layer4Configs</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList">ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags">SrcSecureTags</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">Layer4ConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput">SrcSecureTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList Layer4Configs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList">ComputeNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `SrcSecureTags`<sup>Required</sup> <a name="SrcSecureTags" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList SrcSecureTags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList">ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```csharp
public string[] DestIpRangesInput { get; }
```

- *Type:* string[]

---

##### `Layer4ConfigsInput`<sup>Optional</sup> <a name="Layer4ConfigsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```csharp
public object Layer4ConfigsInput { get; }
```

- *Type:* object

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SrcSecureTagsInput`<sup>Optional</sup> <a name="SrcSecureTagsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput"></a>

```csharp
public object SrcSecureTagsInput { get; }
```

- *Type:* object

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```csharp
public ComputeNetworkFirewallPolicyRuleMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatch">ComputeNetworkFirewallPolicyRuleMatch</a>

---


### ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList <a name="ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get"></a>

```csharp
private ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference <a name="ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNetworkFirewallPolicyRuleTargetSecureTagsList <a name="ComputeNetworkFirewallPolicyRuleTargetSecureTagsList" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleTargetSecureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get"></a>

```csharp
private ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference <a name="ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference <a name="ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicyRule.ComputeNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



