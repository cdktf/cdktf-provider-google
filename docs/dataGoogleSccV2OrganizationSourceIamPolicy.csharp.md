# `dataGoogleSccV2OrganizationSourceIamPolicy` Submodule <a name="`dataGoogleSccV2OrganizationSourceIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSccV2OrganizationSourceIamPolicy <a name="DataGoogleSccV2OrganizationSourceIamPolicy" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy google_scc_v2_organization_source_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSccV2OrganizationSourceIamPolicy(Construct Scope, string Id, DataGoogleSccV2OrganizationSourceIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig">DataGoogleSccV2OrganizationSourceIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig">DataGoogleSccV2OrganizationSourceIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSccV2OrganizationSourceIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSccV2OrganizationSourceIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSccV2OrganizationSourceIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSccV2OrganizationSourceIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSccV2OrganizationSourceIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleSccV2OrganizationSourceIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSccV2OrganizationSourceIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSccV2OrganizationSourceIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSccV2OrganizationSourceIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.organizationInput">OrganizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.sourceInput">SourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.source">Source</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.organizationInput"></a>

```csharp
public string OrganizationInput { get; }
```

- *Type:* string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.sourceInput"></a>

```csharp
public string SourceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSccV2OrganizationSourceIamPolicyConfig <a name="DataGoogleSccV2OrganizationSourceIamPolicyConfig" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSccV2OrganizationSourceIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Organization,
    string Source,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.organization">Organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy#organization DataGoogleSccV2OrganizationSourceIamPolicy#organization}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.source">Source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy#source DataGoogleSccV2OrganizationSourceIamPolicy#source}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy#id DataGoogleSccV2OrganizationSourceIamPolicy#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.organization"></a>

```csharp
public string Organization { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy#organization DataGoogleSccV2OrganizationSourceIamPolicy#organization}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.source"></a>

```csharp
public string Source { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy#source DataGoogleSccV2OrganizationSourceIamPolicy#source}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSccV2OrganizationSourceIamPolicy.DataGoogleSccV2OrganizationSourceIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/scc_v2_organization_source_iam_policy#id DataGoogleSccV2OrganizationSourceIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



