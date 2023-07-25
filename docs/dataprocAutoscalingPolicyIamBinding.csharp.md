# `google_dataproc_autoscaling_policy_iam_binding`

Refer to the Terraform Registory for docs: [`google_dataproc_autoscaling_policy_iam_binding`](https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding).

# `dataprocAutoscalingPolicyIamBinding` Submodule <a name="`dataprocAutoscalingPolicyIamBinding` Submodule" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataprocAutoscalingPolicyIamBinding <a name="DataprocAutoscalingPolicyIamBinding" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding google_dataproc_autoscaling_policy_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocAutoscalingPolicyIamBinding(Construct Scope, string Id, DataprocAutoscalingPolicyIamBindingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig">DataprocAutoscalingPolicyIamBindingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig">DataprocAutoscalingPolicyIamBindingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.putCondition"></a>

```csharp
private void PutCondition(DataprocAutoscalingPolicyIamBindingCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocAutoscalingPolicyIamBinding.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocAutoscalingPolicyIamBinding.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataprocAutoscalingPolicyIamBinding.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference">DataprocAutoscalingPolicyIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.membersInput">MembersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.members">Members</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.condition"></a>

```csharp
public DataprocAutoscalingPolicyIamBindingConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference">DataprocAutoscalingPolicyIamBindingConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.conditionInput"></a>

```csharp
public DataprocAutoscalingPolicyIamBindingCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `MembersInput`<sup>Optional</sup> <a name="MembersInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.membersInput"></a>

```csharp
public string[] MembersInput { get; }
```

- *Type:* string[]

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.members"></a>

```csharp
public string[] Members { get; }
```

- *Type:* string[]

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBinding.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataprocAutoscalingPolicyIamBindingCondition <a name="DataprocAutoscalingPolicyIamBindingCondition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocAutoscalingPolicyIamBindingCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#expression DataprocAutoscalingPolicyIamBinding#expression}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#title DataprocAutoscalingPolicyIamBinding#title}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#description DataprocAutoscalingPolicyIamBinding#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#expression DataprocAutoscalingPolicyIamBinding#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#title DataprocAutoscalingPolicyIamBinding#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#description DataprocAutoscalingPolicyIamBinding#description}.

---

### DataprocAutoscalingPolicyIamBindingConfig <a name="DataprocAutoscalingPolicyIamBindingConfig" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocAutoscalingPolicyIamBindingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Members,
    string PolicyId,
    string Role,
    DataprocAutoscalingPolicyIamBindingCondition Condition = null,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.members">Members</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#members DataprocAutoscalingPolicyIamBinding#members}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.policyId">PolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#policy_id DataprocAutoscalingPolicyIamBinding#policy_id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#role DataprocAutoscalingPolicyIamBinding#role}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#id DataprocAutoscalingPolicyIamBinding#id}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#location DataprocAutoscalingPolicyIamBinding#location}. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#project DataprocAutoscalingPolicyIamBinding#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Members`<sup>Required</sup> <a name="Members" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.members"></a>

```csharp
public string[] Members { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#members DataprocAutoscalingPolicyIamBinding#members}.

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#policy_id DataprocAutoscalingPolicyIamBinding#policy_id}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#role DataprocAutoscalingPolicyIamBinding#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.condition"></a>

```csharp
public DataprocAutoscalingPolicyIamBindingCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#condition DataprocAutoscalingPolicyIamBinding#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#id DataprocAutoscalingPolicyIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#location DataprocAutoscalingPolicyIamBinding#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.75.0/docs/resources/dataproc_autoscaling_policy_iam_binding#project DataprocAutoscalingPolicyIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataprocAutoscalingPolicyIamBindingConditionOutputReference <a name="DataprocAutoscalingPolicyIamBindingConditionOutputReference" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataprocAutoscalingPolicyIamBindingConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingConditionOutputReference.property.internalValue"></a>

```csharp
public DataprocAutoscalingPolicyIamBindingCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataprocAutoscalingPolicyIamBinding.DataprocAutoscalingPolicyIamBindingCondition">DataprocAutoscalingPolicyIamBindingCondition</a>

---



