# `google_compute_region_network_firewall_policy_rule`

Refer to the Terraform Registory for docs: [`google_compute_region_network_firewall_policy_rule`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule).

# `computeRegionNetworkFirewallPolicyRule` Submodule <a name="`computeRegionNetworkFirewallPolicyRule` Submodule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionNetworkFirewallPolicyRule <a name="ComputeRegionNetworkFirewallPolicyRule" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule google_compute_region_network_firewall_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRule(Construct Scope, string Id, ComputeRegionNetworkFirewallPolicyRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig">ComputeRegionNetworkFirewallPolicyRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig">ComputeRegionNetworkFirewallPolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags">PutTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetEnableLogging">ResetEnableLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetRuleName">ResetRuleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetTargetSecureTags">ResetTargetSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetTargetServiceAccounts">ResetTargetServiceAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putMatch"></a>

```csharp
private void PutMatch(ComputeRegionNetworkFirewallPolicyRuleMatch Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch">ComputeRegionNetworkFirewallPolicyRuleMatch</a>

---

##### `PutTargetSecureTags` <a name="PutTargetSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags"></a>

```csharp
private void PutTargetSecureTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putTargetSecureTags.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeRegionNetworkFirewallPolicyRuleTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts">ComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEnableLogging` <a name="ResetEnableLogging" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetEnableLogging"></a>

```csharp
private void ResetEnableLogging()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRuleName` <a name="ResetRuleName" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetRuleName"></a>

```csharp
private void ResetRuleName()
```

##### `ResetTargetSecureTags` <a name="ResetTargetSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetTargetSecureTags"></a>

```csharp
private void ResetTargetSecureTags()
```

##### `ResetTargetServiceAccounts` <a name="ResetTargetServiceAccounts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetTargetServiceAccounts"></a>

```csharp
private void ResetTargetServiceAccounts()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionNetworkFirewallPolicyRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionNetworkFirewallPolicyRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeRegionNetworkFirewallPolicyRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.kind">Kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference">ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.ruleTupleCount">RuleTupleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetSecureTags">TargetSecureTags</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList">ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.directionInput">DirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.enableLoggingInput">EnableLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.firewallPolicyInput">FirewallPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch">ComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.ruleNameInput">RuleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetSecureTagsInput">TargetSecureTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccountsInput">TargetServiceAccountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.direction">Direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.enableLogging">EnableLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.firewallPolicy">FirewallPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.ruleName">RuleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.kind"></a>

```csharp
public string Kind { get; }
```

- *Type:* string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.match"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference Match { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference">ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference</a>

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.ruleTupleCount"></a>

```csharp
public double RuleTupleCount { get; }
```

- *Type:* double

---

##### `TargetSecureTags`<sup>Required</sup> <a name="TargetSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetSecureTags"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList TargetSecureTags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList">ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.timeouts"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference">ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.directionInput"></a>

```csharp
public string DirectionInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `EnableLoggingInput`<sup>Optional</sup> <a name="EnableLoggingInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.enableLoggingInput"></a>

```csharp
public object EnableLoggingInput { get; }
```

- *Type:* object

---

##### `FirewallPolicyInput`<sup>Optional</sup> <a name="FirewallPolicyInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.firewallPolicyInput"></a>

```csharp
public string FirewallPolicyInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.matchInput"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleMatch MatchInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch">ComputeRegionNetworkFirewallPolicyRuleMatch</a>

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.ruleNameInput"></a>

```csharp
public string RuleNameInput { get; }
```

- *Type:* string

---

##### `TargetSecureTagsInput`<sup>Optional</sup> <a name="TargetSecureTagsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetSecureTagsInput"></a>

```csharp
public object TargetSecureTagsInput { get; }
```

- *Type:* object

---

##### `TargetServiceAccountsInput`<sup>Optional</sup> <a name="TargetServiceAccountsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccountsInput"></a>

```csharp
public string[] TargetServiceAccountsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.direction"></a>

```csharp
public string Direction { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `EnableLogging`<sup>Required</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.enableLogging"></a>

```csharp
public object EnableLogging { get; }
```

- *Type:* object

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.firewallPolicy"></a>

```csharp
public string FirewallPolicy { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.ruleName"></a>

```csharp
public string RuleName { get; }
```

- *Type:* string

---

##### `TargetServiceAccounts`<sup>Required</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionNetworkFirewallPolicyRuleConfig <a name="ComputeRegionNetworkFirewallPolicyRuleConfig" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Action,
    string Direction,
    string FirewallPolicy,
    ComputeRegionNetworkFirewallPolicyRuleMatch Match,
    double Priority,
    string Description = null,
    object Disabled = null,
    object EnableLogging = null,
    string Id = null,
    string Project = null,
    string Region = null,
    string RuleName = null,
    object TargetSecureTags = null,
    string[] TargetServiceAccounts = null,
    ComputeRegionNetworkFirewallPolicyRuleTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.action">Action</a></code> | <code>string</code> | The Action to perform when the client connection triggers the rule. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.direction">Direction</a></code> | <code>string</code> | The direction in which this rule applies. Possible values: INGRESS, EGRESS. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.firewallPolicy">FirewallPolicy</a></code> | <code>string</code> | The firewall policy of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch">ComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.priority">Priority</a></code> | <code>double</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.description">Description</a></code> | <code>string</code> | An optional description for this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.disabled">Disabled</a></code> | <code>object</code> | Denotes whether the firewall policy rule is disabled. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.enableLogging">EnableLogging</a></code> | <code>object</code> | Denotes whether to enable logging for a particular rule. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#id ComputeRegionNetworkFirewallPolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.region">Region</a></code> | <code>string</code> | The location of this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.ruleName">RuleName</a></code> | <code>string</code> | An optional name for the rule. This field is not a unique identifier and can be updated. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.targetSecureTags">TargetSecureTags</a></code> | <code>object</code> | target_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts">TargetServiceAccounts</a></code> | <code>string[]</code> | A list of service accounts indicating the sets of instances that are applied with this rule. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts">ComputeRegionNetworkFirewallPolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

The Action to perform when the client connection triggers the rule.

Can currently be either "allow" or "deny()" where valid values for status are 403, 404, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#action ComputeRegionNetworkFirewallPolicyRule#action}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.direction"></a>

```csharp
public string Direction { get; set; }
```

- *Type:* string

The direction in which this rule applies. Possible values: INGRESS, EGRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#direction ComputeRegionNetworkFirewallPolicyRule#direction}

---

##### `FirewallPolicy`<sup>Required</sup> <a name="FirewallPolicy" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.firewallPolicy"></a>

```csharp
public string FirewallPolicy { get; set; }
```

- *Type:* string

The firewall policy of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#firewall_policy ComputeRegionNetworkFirewallPolicyRule#firewall_policy}

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.match"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleMatch Match { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch">ComputeRegionNetworkFirewallPolicyRuleMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#match ComputeRegionNetworkFirewallPolicyRule#match}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647. Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest prority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#priority ComputeRegionNetworkFirewallPolicyRule#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description for this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#description ComputeRegionNetworkFirewallPolicyRule#description}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Denotes whether the firewall policy rule is disabled.

When set to true, the firewall policy rule is not enforced and traffic behaves as if it did not exist. If this is unspecified, the firewall policy rule will be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#disabled ComputeRegionNetworkFirewallPolicyRule#disabled}

---

##### `EnableLogging`<sup>Optional</sup> <a name="EnableLogging" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.enableLogging"></a>

```csharp
public object EnableLogging { get; set; }
```

- *Type:* object

Denotes whether to enable logging for a particular rule.

If logging is enabled, logs will be exported to the configured export destination in Stackdriver. Logs may be exported to BigQuery or Pub/Sub. Note: you cannot enable logging on "goto_next" rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#enable_logging ComputeRegionNetworkFirewallPolicyRule#enable_logging}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#id ComputeRegionNetworkFirewallPolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#project ComputeRegionNetworkFirewallPolicyRule#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The location of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#region ComputeRegionNetworkFirewallPolicyRule#region}

---

##### `RuleName`<sup>Optional</sup> <a name="RuleName" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.ruleName"></a>

```csharp
public string RuleName { get; set; }
```

- *Type:* string

An optional name for the rule. This field is not a unique identifier and can be updated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#rule_name ComputeRegionNetworkFirewallPolicyRule#rule_name}

---

##### `TargetSecureTags`<sup>Optional</sup> <a name="TargetSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.targetSecureTags"></a>

```csharp
public object TargetSecureTags { get; set; }
```

- *Type:* object

target_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#target_secure_tags ComputeRegionNetworkFirewallPolicyRule#target_secure_tags}

---

##### `TargetServiceAccounts`<sup>Optional</sup> <a name="TargetServiceAccounts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.targetServiceAccounts"></a>

```csharp
public string[] TargetServiceAccounts { get; set; }
```

- *Type:* string[]

A list of service accounts indicating the sets of instances that are applied with this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#target_service_accounts ComputeRegionNetworkFirewallPolicyRule#target_service_accounts}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleConfig.property.timeouts"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts">ComputeRegionNetworkFirewallPolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#timeouts ComputeRegionNetworkFirewallPolicyRule#timeouts}

---

### ComputeRegionNetworkFirewallPolicyRuleMatch <a name="ComputeRegionNetworkFirewallPolicyRuleMatch" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatch {
    object Layer4Configs,
    string[] DestAddressGroups = null,
    string[] DestFqdns = null,
    string[] DestIpRanges = null,
    string[] DestRegionCodes = null,
    string[] DestThreatIntelligences = null,
    string[] SrcAddressGroups = null,
    string[] SrcFqdns = null,
    string[] SrcIpRanges = null,
    string[] SrcRegionCodes = null,
    object SrcSecureTags = null,
    string[] SrcThreatIntelligences = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.layer4Configs">Layer4Configs</a></code> | <code>object</code> | layer4_configs block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destAddressGroups">DestAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic destination. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destFqdns">DestFqdns</a></code> | <code>string[]</code> | Domain names that will be used to match against the resolved domain name of destination of traffic. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destRegionCodes">DestRegionCodes</a></code> | <code>string[]</code> | The Unicode country codes whose IP addresses will be used to match against the source of traffic. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>string[]</code> | Name of the Google Cloud Threat Intelligence list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>string[]</code> | Address groups which should be matched against the traffic source. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcFqdns">SrcFqdns</a></code> | <code>string[]</code> | Domain names that will be used to match against the resolved domain name of source of traffic. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | The Unicode country codes whose IP addresses will be used to match against the source of traffic. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcSecureTags">SrcSecureTags</a></code> | <code>object</code> | src_secure_tags block. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>string[]</code> | Name of the Google Cloud Threat Intelligence list. |

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.layer4Configs"></a>

```csharp
public object Layer4Configs { get; set; }
```

- *Type:* object

layer4_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#layer4_configs ComputeRegionNetworkFirewallPolicyRule#layer4_configs}

---

##### `DestAddressGroups`<sup>Optional</sup> <a name="DestAddressGroups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destAddressGroups"></a>

```csharp
public string[] DestAddressGroups { get; set; }
```

- *Type:* string[]

Address groups which should be matched against the traffic destination.

Maximum number of destination address groups is 10. Destination address groups is only supported in Egress rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#dest_address_groups ComputeRegionNetworkFirewallPolicyRule#dest_address_groups}

---

##### `DestFqdns`<sup>Optional</sup> <a name="DestFqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destFqdns"></a>

```csharp
public string[] DestFqdns { get; set; }
```

- *Type:* string[]

Domain names that will be used to match against the resolved domain name of destination of traffic.

Can only be specified if DIRECTION is egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#dest_fqdns ComputeRegionNetworkFirewallPolicyRule#dest_fqdns}

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; set; }
```

- *Type:* string[]

CIDR IP address range. Maximum number of destination CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#dest_ip_ranges ComputeRegionNetworkFirewallPolicyRule#dest_ip_ranges}

---

##### `DestRegionCodes`<sup>Optional</sup> <a name="DestRegionCodes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destRegionCodes"></a>

```csharp
public string[] DestRegionCodes { get; set; }
```

- *Type:* string[]

The Unicode country codes whose IP addresses will be used to match against the source of traffic.

Can only be specified if DIRECTION is egress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#dest_region_codes ComputeRegionNetworkFirewallPolicyRule#dest_region_codes}

---

##### `DestThreatIntelligences`<sup>Optional</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.destThreatIntelligences"></a>

```csharp
public string[] DestThreatIntelligences { get; set; }
```

- *Type:* string[]

Name of the Google Cloud Threat Intelligence list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#dest_threat_intelligences ComputeRegionNetworkFirewallPolicyRule#dest_threat_intelligences}

---

##### `SrcAddressGroups`<sup>Optional</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcAddressGroups"></a>

```csharp
public string[] SrcAddressGroups { get; set; }
```

- *Type:* string[]

Address groups which should be matched against the traffic source.

Maximum number of source address groups is 10. Source address groups is only supported in Ingress rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#src_address_groups ComputeRegionNetworkFirewallPolicyRule#src_address_groups}

---

##### `SrcFqdns`<sup>Optional</sup> <a name="SrcFqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcFqdns"></a>

```csharp
public string[] SrcFqdns { get; set; }
```

- *Type:* string[]

Domain names that will be used to match against the resolved domain name of source of traffic.

Can only be specified if DIRECTION is ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#src_fqdns ComputeRegionNetworkFirewallPolicyRule#src_fqdns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; set; }
```

- *Type:* string[]

CIDR IP address range. Maximum number of source CIDR IP ranges allowed is 5000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#src_ip_ranges ComputeRegionNetworkFirewallPolicyRule#src_ip_ranges}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; set; }
```

- *Type:* string[]

The Unicode country codes whose IP addresses will be used to match against the source of traffic.

Can only be specified if DIRECTION is ingress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#src_region_codes ComputeRegionNetworkFirewallPolicyRule#src_region_codes}

---

##### `SrcSecureTags`<sup>Optional</sup> <a name="SrcSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcSecureTags"></a>

```csharp
public object SrcSecureTags { get; set; }
```

- *Type:* object

src_secure_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#src_secure_tags ComputeRegionNetworkFirewallPolicyRule#src_secure_tags}

---

##### `SrcThreatIntelligences`<sup>Optional</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch.property.srcThreatIntelligences"></a>

```csharp
public string[] SrcThreatIntelligences { get; set; }
```

- *Type:* string[]

Name of the Google Cloud Threat Intelligence list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#src_threat_intelligences ComputeRegionNetworkFirewallPolicyRule#src_threat_intelligences}

---

### ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs <a name="ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs {
    string IpProtocol,
    string[] Ports = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | The IP protocol to which this rule applies. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports">Ports</a></code> | <code>string[]</code> | An optional list of ports to which this rule applies. |

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; set; }
```

- *Type:* string

The IP protocol to which this rule applies.

The protocol type is required when creating a firewall rule. This value can either be one of the following well known protocol strings (`tcp`, `udp`, `icmp`, `esp`, `ah`, `ipip`, `sctp`), or the IP protocol number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#ip_protocol ComputeRegionNetworkFirewallPolicyRule#ip_protocol}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4Configs.property.ports"></a>

```csharp
public string[] Ports { get; set; }
```

- *Type:* string[]

An optional list of ports to which this rule applies.

This field is only applicable for UDP or TCP protocol. Each entry must be either an integer or a range. If not specified, this rule applies to connections through any port. Example inputs include: ``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#ports ComputeRegionNetworkFirewallPolicyRule#ports}

---

### ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags <a name="ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name">Name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTags.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeRegionNetworkFirewallPolicyRuleTargetSecureTags <a name="ComputeRegionNetworkFirewallPolicyRuleTargetSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTags"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleTargetSecureTags {
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.property.name">Name</a></code> | <code>string</code> | Name of the secure tag, created with TagManager's TagValue API. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTags.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secure tag, created with TagManager's TagValue API.

---

### ComputeRegionNetworkFirewallPolicyRuleTimeouts <a name="ComputeRegionNetworkFirewallPolicyRuleTimeouts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#create ComputeRegionNetworkFirewallPolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#delete ComputeRegionNetworkFirewallPolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#update ComputeRegionNetworkFirewallPolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#create ComputeRegionNetworkFirewallPolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#delete ComputeRegionNetworkFirewallPolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_region_network_firewall_policy_rule#update ComputeRegionNetworkFirewallPolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList <a name="ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get"></a>

```csharp
private ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference <a name="ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.resetPorts"></a>

```csharp
private void ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput">IpProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput">PortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol">IpProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports">Ports</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocolInput"></a>

```csharp
public string IpProtocolInput { get; }
```

- *Type:* string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.portsInput"></a>

```csharp
public string[] PortsInput { get; }
```

- *Type:* string[]

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ipProtocol"></a>

```csharp
public string IpProtocol { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.ports"></a>

```csharp
public string[] Ports { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference <a name="ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs">PutLayer4Configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags">PutSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups">ResetDestAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns">ResetDestFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes">ResetDestRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences">ResetDestThreatIntelligences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups">ResetSrcAddressGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns">ResetSrcFqdns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags">ResetSrcSecureTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences">ResetSrcThreatIntelligences</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLayer4Configs` <a name="PutLayer4Configs" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs"></a>

```csharp
private void PutLayer4Configs(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putLayer4Configs.parameter.value"></a>

- *Type:* object

---

##### `PutSrcSecureTags` <a name="PutSrcSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags"></a>

```csharp
private void PutSrcSecureTags(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.putSrcSecureTags.parameter.value"></a>

- *Type:* object

---

##### `ResetDestAddressGroups` <a name="ResetDestAddressGroups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestAddressGroups"></a>

```csharp
private void ResetDestAddressGroups()
```

##### `ResetDestFqdns` <a name="ResetDestFqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestFqdns"></a>

```csharp
private void ResetDestFqdns()
```

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestIpRanges"></a>

```csharp
private void ResetDestIpRanges()
```

##### `ResetDestRegionCodes` <a name="ResetDestRegionCodes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestRegionCodes"></a>

```csharp
private void ResetDestRegionCodes()
```

##### `ResetDestThreatIntelligences` <a name="ResetDestThreatIntelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetDestThreatIntelligences"></a>

```csharp
private void ResetDestThreatIntelligences()
```

##### `ResetSrcAddressGroups` <a name="ResetSrcAddressGroups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcAddressGroups"></a>

```csharp
private void ResetSrcAddressGroups()
```

##### `ResetSrcFqdns` <a name="ResetSrcFqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcFqdns"></a>

```csharp
private void ResetSrcFqdns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcIpRanges"></a>

```csharp
private void ResetSrcIpRanges()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcRegionCodes"></a>

```csharp
private void ResetSrcRegionCodes()
```

##### `ResetSrcSecureTags` <a name="ResetSrcSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcSecureTags"></a>

```csharp
private void ResetSrcSecureTags()
```

##### `ResetSrcThreatIntelligences` <a name="ResetSrcThreatIntelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.resetSrcThreatIntelligences"></a>

```csharp
private void ResetSrcThreatIntelligences()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs">Layer4Configs</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList">ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags">SrcSecureTags</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList">ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput">DestAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput">DestFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput">DestRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput">DestThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput">Layer4ConfigsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput">SrcAddressGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput">SrcFqdnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput">SrcSecureTagsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput">SrcThreatIntelligencesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups">DestAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns">DestFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes">DestRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences">DestThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups">SrcAddressGroups</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns">SrcFqdns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences">SrcThreatIntelligences</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch">ComputeRegionNetworkFirewallPolicyRuleMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Layer4Configs`<sup>Required</sup> <a name="Layer4Configs" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4Configs"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList Layer4Configs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList">ComputeRegionNetworkFirewallPolicyRuleMatchLayer4ConfigsList</a>

---

##### `SrcSecureTags`<sup>Required</sup> <a name="SrcSecureTags" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTags"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList SrcSecureTags { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList">ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList</a>

---

##### `DestAddressGroupsInput`<sup>Optional</sup> <a name="DestAddressGroupsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroupsInput"></a>

```csharp
public string[] DestAddressGroupsInput { get; }
```

- *Type:* string[]

---

##### `DestFqdnsInput`<sup>Optional</sup> <a name="DestFqdnsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdnsInput"></a>

```csharp
public string[] DestFqdnsInput { get; }
```

- *Type:* string[]

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRangesInput"></a>

```csharp
public string[] DestIpRangesInput { get; }
```

- *Type:* string[]

---

##### `DestRegionCodesInput`<sup>Optional</sup> <a name="DestRegionCodesInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodesInput"></a>

```csharp
public string[] DestRegionCodesInput { get; }
```

- *Type:* string[]

---

##### `DestThreatIntelligencesInput`<sup>Optional</sup> <a name="DestThreatIntelligencesInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligencesInput"></a>

```csharp
public string[] DestThreatIntelligencesInput { get; }
```

- *Type:* string[]

---

##### `Layer4ConfigsInput`<sup>Optional</sup> <a name="Layer4ConfigsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.layer4ConfigsInput"></a>

```csharp
public object Layer4ConfigsInput { get; }
```

- *Type:* object

---

##### `SrcAddressGroupsInput`<sup>Optional</sup> <a name="SrcAddressGroupsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroupsInput"></a>

```csharp
public string[] SrcAddressGroupsInput { get; }
```

- *Type:* string[]

---

##### `SrcFqdnsInput`<sup>Optional</sup> <a name="SrcFqdnsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdnsInput"></a>

```csharp
public string[] SrcFqdnsInput { get; }
```

- *Type:* string[]

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRangesInput"></a>

```csharp
public string[] SrcIpRangesInput { get; }
```

- *Type:* string[]

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodesInput"></a>

```csharp
public string[] SrcRegionCodesInput { get; }
```

- *Type:* string[]

---

##### `SrcSecureTagsInput`<sup>Optional</sup> <a name="SrcSecureTagsInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcSecureTagsInput"></a>

```csharp
public object SrcSecureTagsInput { get; }
```

- *Type:* object

---

##### `SrcThreatIntelligencesInput`<sup>Optional</sup> <a name="SrcThreatIntelligencesInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligencesInput"></a>

```csharp
public string[] SrcThreatIntelligencesInput { get; }
```

- *Type:* string[]

---

##### `DestAddressGroups`<sup>Required</sup> <a name="DestAddressGroups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destAddressGroups"></a>

```csharp
public string[] DestAddressGroups { get; }
```

- *Type:* string[]

---

##### `DestFqdns`<sup>Required</sup> <a name="DestFqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destFqdns"></a>

```csharp
public string[] DestFqdns { get; }
```

- *Type:* string[]

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destIpRanges"></a>

```csharp
public string[] DestIpRanges { get; }
```

- *Type:* string[]

---

##### `DestRegionCodes`<sup>Required</sup> <a name="DestRegionCodes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destRegionCodes"></a>

```csharp
public string[] DestRegionCodes { get; }
```

- *Type:* string[]

---

##### `DestThreatIntelligences`<sup>Required</sup> <a name="DestThreatIntelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.destThreatIntelligences"></a>

```csharp
public string[] DestThreatIntelligences { get; }
```

- *Type:* string[]

---

##### `SrcAddressGroups`<sup>Required</sup> <a name="SrcAddressGroups" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcAddressGroups"></a>

```csharp
public string[] SrcAddressGroups { get; }
```

- *Type:* string[]

---

##### `SrcFqdns`<sup>Required</sup> <a name="SrcFqdns" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcFqdns"></a>

```csharp
public string[] SrcFqdns { get; }
```

- *Type:* string[]

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcIpRanges"></a>

```csharp
public string[] SrcIpRanges { get; }
```

- *Type:* string[]

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcRegionCodes"></a>

```csharp
public string[] SrcRegionCodes { get; }
```

- *Type:* string[]

---

##### `SrcThreatIntelligences`<sup>Required</sup> <a name="SrcThreatIntelligences" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.srcThreatIntelligences"></a>

```csharp
public string[] SrcThreatIntelligences { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchOutputReference.property.internalValue"></a>

```csharp
public ComputeRegionNetworkFirewallPolicyRuleMatch InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatch">ComputeRegionNetworkFirewallPolicyRuleMatch</a>

---


### ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList <a name="ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get"></a>

```csharp
private ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference <a name="ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleMatchSrcSecureTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList <a name="ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get"></a>

```csharp
private ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference <a name="ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTargetSecureTagsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference <a name="ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionNetworkFirewallPolicyRule.ComputeRegionNetworkFirewallPolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



