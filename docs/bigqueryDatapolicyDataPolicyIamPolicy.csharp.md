# `google_bigquery_datapolicy_data_policy_iam_policy`

Refer to the Terraform Registory for docs: [`google_bigquery_datapolicy_data_policy_iam_policy`](https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy).

# `bigqueryDatapolicyDataPolicyIamPolicy` Submodule <a name="`bigqueryDatapolicyDataPolicyIamPolicy` Submodule" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDatapolicyDataPolicyIamPolicy <a name="BigqueryDatapolicyDataPolicyIamPolicy" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy google_bigquery_datapolicy_data_policy_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatapolicyDataPolicyIamPolicy(Construct Scope, string Id, BigqueryDatapolicyDataPolicyIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig">BigqueryDatapolicyDataPolicyIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig">BigqueryDatapolicyDataPolicyIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDatapolicyDataPolicyIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDatapolicyDataPolicyIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDatapolicyDataPolicyIamPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.policyDataInput">PolicyDataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.dataPolicyId">DataPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.dataPolicyIdInput"></a>

```csharp
public string DataPolicyIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PolicyDataInput`<sup>Optional</sup> <a name="PolicyDataInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.policyDataInput"></a>

```csharp
public string PolicyDataInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.dataPolicyId"></a>

```csharp
public string DataPolicyId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDatapolicyDataPolicyIamPolicyConfig <a name="BigqueryDatapolicyDataPolicyIamPolicyConfig" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDatapolicyDataPolicyIamPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataPolicyId,
    string PolicyData,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#data_policy_id BigqueryDatapolicyDataPolicyIamPolicy#data_policy_id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.policyData">PolicyData</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#policy_data BigqueryDatapolicyDataPolicyIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#id BigqueryDatapolicyDataPolicyIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#location BigqueryDatapolicyDataPolicyIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#project BigqueryDatapolicyDataPolicyIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.dataPolicyId"></a>

```csharp
public string DataPolicyId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#data_policy_id BigqueryDatapolicyDataPolicyIamPolicy#data_policy_id}.

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.policyData"></a>

```csharp
public string PolicyData { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#policy_data BigqueryDatapolicyDataPolicyIamPolicy#policy_data}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#id BigqueryDatapolicyDataPolicyIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#location BigqueryDatapolicyDataPolicyIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDatapolicyDataPolicyIamPolicy.BigqueryDatapolicyDataPolicyIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/bigquery_datapolicy_data_policy_iam_policy#project BigqueryDatapolicyDataPolicyIamPolicy#project}.

---



