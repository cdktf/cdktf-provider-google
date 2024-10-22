# `dataGoogleSecretManagerRegionalSecretVersion` Submodule <a name="`dataGoogleSecretManagerRegionalSecretVersion` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecretVersion <a name="DataGoogleSecretManagerRegionalSecretVersion" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version google_secret_manager_regional_secret_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretVersion(Construct Scope, string Id, DataGoogleSecretManagerRegionalSecretVersionConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig">DataGoogleSecretManagerRegionalSecretVersionConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig">DataGoogleSecretManagerRegionalSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetIsSecretDataBase64">ResetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIsSecretDataBase64` <a name="ResetIsSecretDataBase64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetIsSecretDataBase64"></a>

```csharp
private void ResetIsSecretDataBase64()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.resetVersion"></a>

```csharp
private void ResetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecretVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecretVersion.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecretVersion.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecretVersion.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecretVersion.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecretVersion resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecretVersion to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecretManagerRegionalSecretVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecretVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.destroyTime">DestroyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.secretData">SecretData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64Input">IsSecretDataBase64Input</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.secretInput">SecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.secret">Secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.version">Version</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.customerManagedEncryption"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList</a>

---

##### `DestroyTime`<sup>Required</sup> <a name="DestroyTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.destroyTime"></a>

```csharp
public string DestroyTime { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecretData`<sup>Required</sup> <a name="SecretData" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.secretData"></a>

```csharp
public string SecretData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64Input`<sup>Optional</sup> <a name="IsSecretDataBase64Input" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64Input"></a>

```csharp
public object IsSecretDataBase64Input { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretInput`<sup>Optional</sup> <a name="SecretInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.secretInput"></a>

```csharp
public string SecretInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IsSecretDataBase64`<sup>Required</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.isSecretDataBase64"></a>

```csharp
public object IsSecretDataBase64 { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.secret"></a>

```csharp
public string Secret { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersion.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretVersionConfig <a name="DataGoogleSecretManagerRegionalSecretVersionConfig" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretVersionConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Secret,
    string Id = null,
    object IsSecretDataBase64 = null,
    string Location = null,
    string Project = null,
    string Version = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.secret">Secret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#secret DataGoogleSecretManagerRegionalSecretVersion#secret}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#id DataGoogleSecretManagerRegionalSecretVersion#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64">IsSecretDataBase64</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersion#is_secret_data_base64}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#location DataGoogleSecretManagerRegionalSecretVersion#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#project DataGoogleSecretManagerRegionalSecretVersion#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.version">Version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#version DataGoogleSecretManagerRegionalSecretVersion#version}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.secret"></a>

```csharp
public string Secret { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#secret DataGoogleSecretManagerRegionalSecretVersion#secret}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#id DataGoogleSecretManagerRegionalSecretVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsSecretDataBase64`<sup>Optional</sup> <a name="IsSecretDataBase64" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.isSecretDataBase64"></a>

```csharp
public object IsSecretDataBase64 { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#is_secret_data_base64 DataGoogleSecretManagerRegionalSecretVersion#is_secret_data_base64}.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#location DataGoogleSecretManagerRegionalSecretVersion#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#project DataGoogleSecretManagerRegionalSecretVersion#project}.

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/secret_manager_regional_secret_version#version DataGoogleSecretManagerRegionalSecretVersion#version}.

---

### DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption <a name="DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList <a name="DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.kmsKeyVersionName"></a>

```csharp
public string KmsKeyVersionName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecretVersion.DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretVersionCustomerManagedEncryption</a>

---



