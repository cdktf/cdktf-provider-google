# `data_google_healthcare_dicom_store_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_healthcare_dicom_store_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/healthcare_dicom_store_iam_policy).

# `dataGoogleHealthcareDicomStoreIamPolicy` Submodule <a name="`dataGoogleHealthcareDicomStoreIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleHealthcareDicomStoreIamPolicy <a name="DataGoogleHealthcareDicomStoreIamPolicy" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/healthcare_dicom_store_iam_policy google_healthcare_dicom_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleHealthcareDicomStoreIamPolicy(Construct Scope, string Id, DataGoogleHealthcareDicomStoreIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig">DataGoogleHealthcareDicomStoreIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig">DataGoogleHealthcareDicomStoreIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleHealthcareDicomStoreIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleHealthcareDicomStoreIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleHealthcareDicomStoreIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.dicomStoreIdInput">DicomStoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.dicomStoreId">DicomStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `DicomStoreIdInput`<sup>Optional</sup> <a name="DicomStoreIdInput" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.dicomStoreIdInput"></a>

```csharp
public string DicomStoreIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `DicomStoreId`<sup>Required</sup> <a name="DicomStoreId" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.dicomStoreId"></a>

```csharp
public string DicomStoreId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleHealthcareDicomStoreIamPolicyConfig <a name="DataGoogleHealthcareDicomStoreIamPolicyConfig" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleHealthcareDicomStoreIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DicomStoreId,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.dicomStoreId">DicomStoreId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/healthcare_dicom_store_iam_policy#dicom_store_id DataGoogleHealthcareDicomStoreIamPolicy#dicom_store_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/healthcare_dicom_store_iam_policy#id DataGoogleHealthcareDicomStoreIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DicomStoreId`<sup>Required</sup> <a name="DicomStoreId" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.dicomStoreId"></a>

```csharp
public string DicomStoreId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/healthcare_dicom_store_iam_policy#dicom_store_id DataGoogleHealthcareDicomStoreIamPolicy#dicom_store_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleHealthcareDicomStoreIamPolicy.DataGoogleHealthcareDicomStoreIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.79.0/docs/data-sources/healthcare_dicom_store_iam_policy#id DataGoogleHealthcareDicomStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



