# `google_compute_node_template`

Refer to the Terraform Registory for docs: [`google_compute_node_template`](https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template).

# `computeNodeTemplate` Submodule <a name="`computeNodeTemplate` Submodule" id="@cdktf/provider-google.computeNodeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeNodeTemplate <a name="ComputeNodeTemplate" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template google_compute_node_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplate(Construct Scope, string Id, ComputeNodeTemplateConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig">ComputeNodeTemplateConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig">ComputeNodeTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility">PutNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding">PutServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType">ResetCpuOvercommitType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels">ResetNodeAffinityLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility">ResetNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding">ResetServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutNodeTypeFlexibility` <a name="PutNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility"></a>

```csharp
private void PutNodeTypeFlexibility(ComputeNodeTemplateNodeTypeFlexibility Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putNodeTypeFlexibility.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `PutServerBinding` <a name="PutServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding"></a>

```csharp
private void PutServerBinding(ComputeNodeTemplateServerBinding Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putServerBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeNodeTemplateTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

---

##### `ResetCpuOvercommitType` <a name="ResetCpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetCpuOvercommitType"></a>

```csharp
private void ResetCpuOvercommitType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetNodeAffinityLabels` <a name="ResetNodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeAffinityLabels"></a>

```csharp
private void ResetNodeAffinityLabels()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeType"></a>

```csharp
private void ResetNodeType()
```

##### `ResetNodeTypeFlexibility` <a name="ResetNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetNodeTypeFlexibility"></a>

```csharp
private void ResetNodeTypeFlexibility()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetServerBinding` <a name="ResetServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetServerBinding"></a>

```csharp
private void ResetServerBinding()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNodeTemplate.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNodeTemplate.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

ComputeNodeTemplate.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility">NodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding">ServerBinding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput">CpuOvercommitTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput">NodeAffinityLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput">NodeTypeFlexibilityInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput">NodeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput">ServerBindingInput</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType">CpuOvercommitType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels">NodeAffinityLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.creationTimestamp"></a>

```csharp
public string CreationTimestamp { get; }
```

- *Type:* string

---

##### `NodeTypeFlexibility`<sup>Required</sup> <a name="NodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibility"></a>

```csharp
public ComputeNodeTemplateNodeTypeFlexibilityOutputReference NodeTypeFlexibility { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference">ComputeNodeTemplateNodeTypeFlexibilityOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `ServerBinding`<sup>Required</sup> <a name="ServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBinding"></a>

```csharp
public ComputeNodeTemplateServerBindingOutputReference ServerBinding { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference">ComputeNodeTemplateServerBindingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeouts"></a>

```csharp
public ComputeNodeTemplateTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference">ComputeNodeTemplateTimeoutsOutputReference</a>

---

##### `CpuOvercommitTypeInput`<sup>Optional</sup> <a name="CpuOvercommitTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitTypeInput"></a>

```csharp
public string CpuOvercommitTypeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NodeAffinityLabelsInput`<sup>Optional</sup> <a name="NodeAffinityLabelsInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeAffinityLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodeTypeFlexibilityInput`<sup>Optional</sup> <a name="NodeTypeFlexibilityInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeFlexibilityInput"></a>

```csharp
public ComputeNodeTemplateNodeTypeFlexibility NodeTypeFlexibilityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeTypeInput"></a>

```csharp
public string NodeTypeInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ServerBindingInput`<sup>Optional</sup> <a name="ServerBindingInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.serverBindingInput"></a>

```csharp
public ComputeNodeTemplateServerBinding ServerBindingInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `CpuOvercommitType`<sup>Required</sup> <a name="CpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.cpuOvercommitType"></a>

```csharp
public string CpuOvercommitType { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeAffinityLabels`<sup>Required</sup> <a name="NodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeAffinityLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeAffinityLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplate.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeNodeTemplateConfig <a name="ComputeNodeTemplateConfig" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplateConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CpuOvercommitType = null,
    string Description = null,
    string Id = null,
    string Name = null,
    System.Collections.Generic.IDictionary<string, string> NodeAffinityLabels = null,
    string NodeType = null,
    ComputeNodeTemplateNodeTypeFlexibility NodeTypeFlexibility = null,
    string Project = null,
    string Region = null,
    ComputeNodeTemplateServerBinding ServerBinding = null,
    ComputeNodeTemplateTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType">CpuOvercommitType</a></code> | <code>string</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description">Description</a></code> | <code>string</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#id ComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name">Name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels">NodeAffinityLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType">NodeType</a></code> | <code>string</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility">NodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#project ComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region">Region</a></code> | <code>string</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding">ServerBinding</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CpuOvercommitType`<sup>Optional</sup> <a name="CpuOvercommitType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.cpuOvercommitType"></a>

```csharp
public string CpuOvercommitType { get; set; }
```

- *Type:* string

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#cpu_overcommit_type ComputeNodeTemplate#cpu_overcommit_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#description ComputeNodeTemplate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#id ComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#name ComputeNodeTemplate#name}

---

##### `NodeAffinityLabels`<sup>Optional</sup> <a name="NodeAffinityLabels" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeAffinityLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> NodeAffinityLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#node_affinity_labels ComputeNodeTemplate#node_affinity_labels}

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeType"></a>

```csharp
public string NodeType { get; set; }
```

- *Type:* string

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#node_type ComputeNodeTemplate#node_type}

---

##### `NodeTypeFlexibility`<sup>Optional</sup> <a name="NodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.nodeTypeFlexibility"></a>

```csharp
public ComputeNodeTemplateNodeTypeFlexibility NodeTypeFlexibility { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#node_type_flexibility ComputeNodeTemplate#node_type_flexibility}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#project ComputeNodeTemplate#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#region ComputeNodeTemplate#region}

---

##### `ServerBinding`<sup>Optional</sup> <a name="ServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.serverBinding"></a>

```csharp
public ComputeNodeTemplateServerBinding ServerBinding { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#server_binding ComputeNodeTemplate#server_binding}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateConfig.property.timeouts"></a>

```csharp
public ComputeNodeTemplateTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts">ComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#timeouts ComputeNodeTemplate#timeouts}

---

### ComputeNodeTemplateNodeTypeFlexibility <a name="ComputeNodeTemplateNodeTypeFlexibility" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplateNodeTypeFlexibility {
    string Cpus = null,
    string Memory = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus">Cpus</a></code> | <code>string</code> | Number of virtual CPUs to use. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory">Memory</a></code> | <code>string</code> | Physical memory available to the node, defined in MB. |

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.cpus"></a>

```csharp
public string Cpus { get; set; }
```

- *Type:* string

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#cpus ComputeNodeTemplate#cpus}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility.property.memory"></a>

```csharp
public string Memory { get; set; }
```

- *Type:* string

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#memory ComputeNodeTemplate#memory}

---

### ComputeNodeTemplateServerBinding <a name="ComputeNodeTemplateServerBinding" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplateServerBinding {
    string Type
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type">Type</a></code> | <code>string</code> | Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#type ComputeNodeTemplate#type}

---

### ComputeNodeTemplateTimeouts <a name="ComputeNodeTemplateTimeouts" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplateTimeouts {
    string Create = null,
    string Delete = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#create ComputeNodeTemplate#create}. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#delete ComputeNodeTemplate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#create ComputeNodeTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.73.1/docs/resources/compute_node_template#delete ComputeNodeTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeNodeTemplateNodeTypeFlexibilityOutputReference <a name="ComputeNodeTemplateNodeTypeFlexibilityOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplateNodeTypeFlexibilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus"></a>

```csharp
private void ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory"></a>

```csharp
private void ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd">LocalSsd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput">CpusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput">MemoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus">Cpus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory">Memory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LocalSsd`<sup>Required</sup> <a name="LocalSsd" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd"></a>

```csharp
public string LocalSsd { get; }
```

- *Type:* string

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput"></a>

```csharp
public string CpusInput { get; }
```

- *Type:* string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput"></a>

```csharp
public string MemoryInput { get; }
```

- *Type:* string

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus"></a>

```csharp
public string Cpus { get; }
```

- *Type:* string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory"></a>

```csharp
public string Memory { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```csharp
public ComputeNodeTemplateNodeTypeFlexibility InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateNodeTypeFlexibility">ComputeNodeTemplateNodeTypeFlexibility</a>

---


### ComputeNodeTemplateServerBindingOutputReference <a name="ComputeNodeTemplateServerBindingOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplateServerBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBindingOutputReference.property.internalValue"></a>

```csharp
public ComputeNodeTemplateServerBinding InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateServerBinding">ComputeNodeTemplateServerBinding</a>

---


### ComputeNodeTemplateTimeoutsOutputReference <a name="ComputeNodeTemplateTimeoutsOutputReference" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new ComputeNodeTemplateTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeNodeTemplate.ComputeNodeTemplateTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



