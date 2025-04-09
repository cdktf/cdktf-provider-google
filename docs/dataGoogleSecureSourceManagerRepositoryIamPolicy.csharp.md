# `dataGoogleSecureSourceManagerRepositoryIamPolicy` Submodule <a name="`dataGoogleSecureSourceManagerRepositoryIamPolicy` Submodule" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecureSourceManagerRepositoryIamPolicy <a name="DataGoogleSecureSourceManagerRepositoryIamPolicy" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy google_secure_source_manager_repository_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecureSourceManagerRepositoryIamPolicy(Construct Scope, string Id, DataGoogleSecureSourceManagerRepositoryIamPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig">DataGoogleSecureSourceManagerRepositoryIamPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig">DataGoogleSecureSourceManagerRepositoryIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecureSourceManagerRepositoryIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecureSourceManagerRepositoryIamPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecureSourceManagerRepositoryIamPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecureSourceManagerRepositoryIamPolicy.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecureSourceManagerRepositoryIamPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleSecureSourceManagerRepositoryIamPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecureSourceManagerRepositoryIamPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecureSourceManagerRepositoryIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecureSourceManagerRepositoryIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.policyData">PolicyData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryIdInput">RepositoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryId">RepositoryId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.policyData"></a>

```csharp
public string PolicyData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RepositoryIdInput`<sup>Optional</sup> <a name="RepositoryIdInput" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryIdInput"></a>

```csharp
public string RepositoryIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.repositoryId"></a>

```csharp
public string RepositoryId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecureSourceManagerRepositoryIamPolicyConfig <a name="DataGoogleSecureSourceManagerRepositoryIamPolicyConfig" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecureSourceManagerRepositoryIamPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string RepositoryId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.repositoryId">RepositoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#repository_id DataGoogleSecureSourceManagerRepositoryIamPolicy#repository_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#id DataGoogleSecureSourceManagerRepositoryIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#location DataGoogleSecureSourceManagerRepositoryIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#project DataGoogleSecureSourceManagerRepositoryIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `RepositoryId`<sup>Required</sup> <a name="RepositoryId" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.repositoryId"></a>

```csharp
public string RepositoryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#repository_id DataGoogleSecureSourceManagerRepositoryIamPolicy#repository_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#id DataGoogleSecureSourceManagerRepositoryIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#location DataGoogleSecureSourceManagerRepositoryIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecureSourceManagerRepositoryIamPolicy.DataGoogleSecureSourceManagerRepositoryIamPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secure_source_manager_repository_iam_policy#project DataGoogleSecureSourceManagerRepositoryIamPolicy#project}.

---



