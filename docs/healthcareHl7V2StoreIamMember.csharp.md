# `google_healthcare_hl7_v2_store_iam_member`

Refer to the Terraform Registory for docs: [`google_healthcare_hl7_v2_store_iam_member`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member).

# `healthcareHl7V2StoreIamMember` Submodule <a name="`healthcareHl7V2StoreIamMember` Submodule" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2StoreIamMember <a name="HealthcareHl7V2StoreIamMember" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member google_healthcare_hl7_v2_store_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreIamMember(Construct Scope, string Id, HealthcareHl7V2StoreIamMemberConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig">HealthcareHl7V2StoreIamMemberConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig">HealthcareHl7V2StoreIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.putCondition"></a>

```csharp
private void PutCondition(HealthcareHl7V2StoreIamMemberCondition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition">HealthcareHl7V2StoreIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.resetCondition"></a>

```csharp
private void ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareHl7V2StoreIamMember.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareHl7V2StoreIamMember.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

HealthcareHl7V2StoreIamMember.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference">HealthcareHl7V2StoreIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition">HealthcareHl7V2StoreIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.hl7V2StoreIdInput">Hl7V2StoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.memberInput">MemberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.hl7V2StoreId">Hl7V2StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.member">Member</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.role">Role</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.condition"></a>

```csharp
public HealthcareHl7V2StoreIamMemberConditionOutputReference Condition { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference">HealthcareHl7V2StoreIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.conditionInput"></a>

```csharp
public HealthcareHl7V2StoreIamMemberCondition ConditionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition">HealthcareHl7V2StoreIamMemberCondition</a>

---

##### `Hl7V2StoreIdInput`<sup>Optional</sup> <a name="Hl7V2StoreIdInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.hl7V2StoreIdInput"></a>

```csharp
public string Hl7V2StoreIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.memberInput"></a>

```csharp
public string MemberInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `Hl7V2StoreId`<sup>Required</sup> <a name="Hl7V2StoreId" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.hl7V2StoreId"></a>

```csharp
public string Hl7V2StoreId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.member"></a>

```csharp
public string Member { get; }
```

- *Type:* string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMember.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreIamMemberCondition <a name="HealthcareHl7V2StoreIamMemberCondition" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreIamMemberCondition {
    string Expression,
    string Title,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition.property.expression">Expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#expression HealthcareHl7V2StoreIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition.property.title">Title</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#title HealthcareHl7V2StoreIamMember#title}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#description HealthcareHl7V2StoreIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition.property.expression"></a>

```csharp
public string Expression { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#expression HealthcareHl7V2StoreIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#title HealthcareHl7V2StoreIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#description HealthcareHl7V2StoreIamMember#description}.

---

### HealthcareHl7V2StoreIamMemberConfig <a name="HealthcareHl7V2StoreIamMemberConfig" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreIamMemberConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Hl7V2StoreId,
    string Member,
    string Role,
    HealthcareHl7V2StoreIamMemberCondition Condition = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.hl7V2StoreId">Hl7V2StoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#hl7_v2_store_id HealthcareHl7V2StoreIamMember#hl7_v2_store_id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.member">Member</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#member HealthcareHl7V2StoreIamMember#member}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.role">Role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#role HealthcareHl7V2StoreIamMember#role}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition">HealthcareHl7V2StoreIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#id HealthcareHl7V2StoreIamMember#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Hl7V2StoreId`<sup>Required</sup> <a name="Hl7V2StoreId" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.hl7V2StoreId"></a>

```csharp
public string Hl7V2StoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#hl7_v2_store_id HealthcareHl7V2StoreIamMember#hl7_v2_store_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.member"></a>

```csharp
public string Member { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#member HealthcareHl7V2StoreIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#role HealthcareHl7V2StoreIamMember#role}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.condition"></a>

```csharp
public HealthcareHl7V2StoreIamMemberCondition Condition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition">HealthcareHl7V2StoreIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#condition HealthcareHl7V2StoreIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/resources/healthcare_hl7_v2_store_iam_member#id HealthcareHl7V2StoreIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreIamMemberConditionOutputReference <a name="HealthcareHl7V2StoreIamMemberConditionOutputReference" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new HealthcareHl7V2StoreIamMemberConditionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition">HealthcareHl7V2StoreIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.expressionInput"></a>

```csharp
public string ExpressionInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.expression"></a>

```csharp
public string Expression { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberConditionOutputReference.property.internalValue"></a>

```csharp
public HealthcareHl7V2StoreIamMemberCondition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2StoreIamMember.HealthcareHl7V2StoreIamMemberCondition">HealthcareHl7V2StoreIamMemberCondition</a>

---



