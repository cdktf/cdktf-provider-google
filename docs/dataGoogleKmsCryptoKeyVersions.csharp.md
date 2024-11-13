# `dataGoogleKmsCryptoKeyVersions` Submodule <a name="`dataGoogleKmsCryptoKeyVersions` Submodule" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleKmsCryptoKeyVersions <a name="DataGoogleKmsCryptoKeyVersions" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/kms_crypto_key_versions google_kms_crypto_key_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersions(Construct Scope, string Id, DataGoogleKmsCryptoKeyVersionsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig">DataGoogleKmsCryptoKeyVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig">DataGoogleKmsCryptoKeyVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleKmsCryptoKeyVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleKmsCryptoKeyVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleKmsCryptoKeyVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleKmsCryptoKeyVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleKmsCryptoKeyVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleKmsCryptoKeyVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleKmsCryptoKeyVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleKmsCryptoKeyVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/kms_crypto_key_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleKmsCryptoKeyVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList">DataGoogleKmsCryptoKeyVersionsPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.versions">Versions</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList">DataGoogleKmsCryptoKeyVersionsVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.cryptoKeyInput">CryptoKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.cryptoKey">CryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.publicKey"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionsPublicKeyList PublicKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList">DataGoogleKmsCryptoKeyVersionsPublicKeyList</a>

---

##### `Versions`<sup>Required</sup> <a name="Versions" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.versions"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionsVersionsList Versions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList">DataGoogleKmsCryptoKeyVersionsVersionsList</a>

---

##### `CryptoKeyInput`<sup>Optional</sup> <a name="CryptoKeyInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.cryptoKeyInput"></a>

```csharp
public string CryptoKeyInput { get; }
```

- *Type:* string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.cryptoKey"></a>

```csharp
public string CryptoKey { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleKmsCryptoKeyVersionsConfig <a name="DataGoogleKmsCryptoKeyVersionsConfig" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CryptoKey,
    string Filter = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.cryptoKey">CryptoKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/kms_crypto_key_versions#crypto_key DataGoogleKmsCryptoKeyVersions#crypto_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.filter">Filter</a></code> | <code>string</code> | The filter argument is used to add a filter query parameter that limits which cryptoKeyVersions are retrieved by the data source: ?filter={{filter}}. Example values:. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/kms_crypto_key_versions#id DataGoogleKmsCryptoKeyVersions#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.cryptoKey"></a>

```csharp
public string CryptoKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/kms_crypto_key_versions#crypto_key DataGoogleKmsCryptoKeyVersions#crypto_key}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

The filter argument is used to add a filter query parameter that limits which cryptoKeyVersions are retrieved by the data source: ?filter={{filter}}. Example values:.

* "name:my-cryptokey-version-" will retrieve cryptoKeyVersions that contain "my-key-" anywhere in their name. Note: names take the form projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}/cryptoKeyVersions/{{cryptoKeyVersion}}.
* "name=projects/my-project/locations/global/keyRings/my-key-ring/cryptoKeys/my-key-1/cryptoKeyVersions/1" will only retrieve a key with that exact name.

[See the documentation about using filters](https://cloud.google.com/kms/docs/sorting-and-filtering)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/kms_crypto_key_versions#filter DataGoogleKmsCryptoKeyVersions#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/data-sources/kms_crypto_key_versions#id DataGoogleKmsCryptoKeyVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleKmsCryptoKeyVersionsPublicKey <a name="DataGoogleKmsCryptoKeyVersionsPublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsPublicKey {

};
```


### DataGoogleKmsCryptoKeyVersionsVersions <a name="DataGoogleKmsCryptoKeyVersionsVersions" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsVersions {

};
```


### DataGoogleKmsCryptoKeyVersionsVersionsPublicKey <a name="DataGoogleKmsCryptoKeyVersionsVersionsPublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsVersionsPublicKey {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleKmsCryptoKeyVersionsPublicKeyList <a name="DataGoogleKmsCryptoKeyVersionsPublicKeyList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsPublicKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.get"></a>

```csharp
private DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference <a name="DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.pem">Pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKey">DataGoogleKmsCryptoKeyVersionsPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.pem"></a>

```csharp
public string Pem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKeyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionsPublicKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsPublicKey">DataGoogleKmsCryptoKeyVersionsPublicKey</a>

---


### DataGoogleKmsCryptoKeyVersionsVersionsList <a name="DataGoogleKmsCryptoKeyVersionsVersionsList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsVersionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.get"></a>

```csharp
private DataGoogleKmsCryptoKeyVersionsVersionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyVersionsVersionsOutputReference <a name="DataGoogleKmsCryptoKeyVersionsVersionsOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsVersionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.cryptoKey">CryptoKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.protectionLevel">ProtectionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.publicKey">PublicKey</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList">DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersions">DataGoogleKmsCryptoKeyVersionsVersions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `CryptoKey`<sup>Required</sup> <a name="CryptoKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.cryptoKey"></a>

```csharp
public string CryptoKey { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ProtectionLevel`<sup>Required</sup> <a name="ProtectionLevel" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.protectionLevel"></a>

```csharp
public string ProtectionLevel { get; }
```

- *Type:* string

---

##### `PublicKey`<sup>Required</sup> <a name="PublicKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.publicKey"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList PublicKey { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList">DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionsVersions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersions">DataGoogleKmsCryptoKeyVersionsVersions</a>

---


### DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList <a name="DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.get"></a>

```csharp
private DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference <a name="DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.pem">Pem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKey">DataGoogleKmsCryptoKeyVersionsVersionsPublicKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `Pem`<sup>Required</sup> <a name="Pem" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.pem"></a>

```csharp
public string Pem { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKeyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleKmsCryptoKeyVersionsVersionsPublicKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleKmsCryptoKeyVersions.DataGoogleKmsCryptoKeyVersionsVersionsPublicKey">DataGoogleKmsCryptoKeyVersionsVersionsPublicKey</a>

---



