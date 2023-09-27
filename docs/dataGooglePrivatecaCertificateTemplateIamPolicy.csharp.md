# `data_google_privateca_certificate_template_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_privateca_certificate_template_iam_policy`](https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy).

# `dataGooglePrivatecaCertificateTemplateIamPolicy` Submodule <a name="`dataGooglePrivatecaCertificateTemplateIamPolicy` Submodule" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePrivatecaCertificateTemplateIamPolicy <a name="DataGooglePrivatecaCertificateTemplateIamPolicy" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy google_privateca_certificate_template_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGooglePrivatecaCertificateTemplateIamPolicy(Construct Scope, string Id, DataGooglePrivatecaCertificateTemplateIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig">DataGooglePrivatecaCertificateTemplateIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig">DataGooglePrivatecaCertificateTemplateIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGooglePrivatecaCertificateTemplateIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGooglePrivatecaCertificateTemplateIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGooglePrivatecaCertificateTemplateIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplateInput">CertificateTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplate">CertificateTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `CertificateTemplateInput`<sup>Optional</sup> <a name="CertificateTemplateInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplateInput"></a>

```csharp
public string CertificateTemplateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `CertificateTemplate`<sup>Required</sup> <a name="CertificateTemplate" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplate"></a>

```csharp
public string CertificateTemplate { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePrivatecaCertificateTemplateIamPolicyConfig <a name="DataGooglePrivatecaCertificateTemplateIamPolicyConfig" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGooglePrivatecaCertificateTemplateIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CertificateTemplate,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.certificateTemplate">CertificateTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#certificate_template DataGooglePrivatecaCertificateTemplateIamPolicy#certificate_template}. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#id DataGooglePrivatecaCertificateTemplateIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#location DataGooglePrivatecaCertificateTemplateIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#project DataGooglePrivatecaCertificateTemplateIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CertificateTemplate`<sup>Required</sup> <a name="CertificateTemplate" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.certificateTemplate"></a>

```csharp
public string CertificateTemplate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#certificate_template DataGooglePrivatecaCertificateTemplateIamPolicy#certificate_template}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#id DataGooglePrivatecaCertificateTemplateIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#location DataGooglePrivatecaCertificateTemplateIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.84.0/docs/data-sources/privateca_certificate_template_iam_policy#project DataGooglePrivatecaCertificateTemplateIamPolicy#project}.

---



