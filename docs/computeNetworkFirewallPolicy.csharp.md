# `google_compute_network_firewall_policy`

Refer to the Terraform Registory for docs: [`google_compute_network_firewall_policy`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy).

# `computeNetworkFirewallPolicy` Submodule <a name="`computeNetworkFirewallPolicy` Submodule" id="@cdktf/provider-google.computeNetworkFirewallPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNetworkFirewallPolicy <a name="ComputeNetworkFirewallPolicy" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy google_compute_network_firewall_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicy(Construct Scope, string Id, ComputeNetworkFirewallPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig">ComputeNetworkFirewallPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig">ComputeNetworkFirewallPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeNetworkFirewallPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts">ComputeNetworkFirewallPolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkFirewallPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkFirewallPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNetworkFirewallPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.networkFirewallPolicyId">NetworkFirewallPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.ruleTupleCount">RuleTupleCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.selfLinkWithId">SelfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference">ComputeNetworkFirewallPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `NetworkFirewallPolicyId`<sup>Required</sup> <a name="NetworkFirewallPolicyId" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.networkFirewallPolicyId"></a>

```csharp
public string NetworkFirewallPolicyId { get; }
```

- *Type:* string

---

##### `RuleTupleCount`<sup>Required</sup> <a name="RuleTupleCount" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.ruleTupleCount"></a>

```csharp
public double RuleTupleCount { get; }
```

- *Type:* double

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `SelfLinkWithId`<sup>Required</sup> <a name="SelfLinkWithId" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.selfLinkWithId"></a>

```csharp
public string SelfLinkWithId { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.timeouts"></a>

```csharp
public ComputeNetworkFirewallPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference">ComputeNetworkFirewallPolicyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNetworkFirewallPolicyConfig <a name="ComputeNetworkFirewallPolicyConfig" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    string Project = null,
    ComputeNetworkFirewallPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.name">Name</a></code> | <code>string</code> | User-provided name of the Network firewall policy. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.description">Description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#id ComputeNetworkFirewallPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.project">Project</a></code> | <code>string</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts">ComputeNetworkFirewallPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

User-provided name of the Network firewall policy.

The name should be unique in the project in which the firewall policy is created. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#name ComputeNetworkFirewallPolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#description ComputeNetworkFirewallPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#id ComputeNetworkFirewallPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#project ComputeNetworkFirewallPolicy#project}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyConfig.property.timeouts"></a>

```csharp
public ComputeNetworkFirewallPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts">ComputeNetworkFirewallPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#timeouts ComputeNetworkFirewallPolicy#timeouts}

---

### ComputeNetworkFirewallPolicyTimeouts <a name="ComputeNetworkFirewallPolicyTimeouts" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#create ComputeNetworkFirewallPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#delete ComputeNetworkFirewallPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#update ComputeNetworkFirewallPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#create ComputeNetworkFirewallPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#delete ComputeNetworkFirewallPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_network_firewall_policy#update ComputeNetworkFirewallPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNetworkFirewallPolicyTimeoutsOutputReference <a name="ComputeNetworkFirewallPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNetworkFirewallPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNetworkFirewallPolicy.ComputeNetworkFirewallPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



