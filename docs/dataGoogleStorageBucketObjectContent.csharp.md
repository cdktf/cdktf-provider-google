# `dataGoogleStorageBucketObjectContent` Submodule <a name="`dataGoogleStorageBucketObjectContent` Submodule" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObjectContent <a name="DataGoogleStorageBucketObjectContent" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_bucket_object_content google_storage_bucket_object_content}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContent(Construct Scope, string Id, DataGoogleStorageBucketObjectContentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig">DataGoogleStorageBucketObjectContentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig">DataGoogleStorageBucketObjectContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageBucketObjectContent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageBucketObjectContent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageBucketObjectContent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageBucketObjectContent.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageBucketObjectContent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleStorageBucketObjectContent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageBucketObjectContent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageBucketObjectContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_bucket_object_content#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucketObjectContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cacheControl">CacheControl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64">ContentBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64Sha512">ContentBase64Sha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentHexsha512">ContentHexsha512</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentLanguage">ContentLanguage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.crc32C">Crc32C</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.customerEncryption">CustomerEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList">DataGoogleStorageBucketObjectContentCustomerEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.deletionPolicy">DeletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.detectMd5Hash">DetectMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.eventBasedHold">EventBasedHold</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forceEmptyContentType">ForceEmptyContentType</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.generation">Generation</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hash">Md5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hexhash">Md5Hexhash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.mediaLink">MediaLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.metadata">Metadata</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.outputName">OutputName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.retention">Retention</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList">DataGoogleStorageBucketObjectContentRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.source">Source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.sourceMd5Hash">SourceMd5Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.storageClass">StorageClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.temporaryHold">TemporaryHold</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CacheControl`<sup>Required</sup> <a name="CacheControl" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.cacheControl"></a>

```csharp
public string CacheControl { get; }
```

- *Type:* string

---

##### `ContentBase64`<sup>Required</sup> <a name="ContentBase64" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64"></a>

```csharp
public string ContentBase64 { get; }
```

- *Type:* string

---

##### `ContentBase64Sha512`<sup>Required</sup> <a name="ContentBase64Sha512" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentBase64Sha512"></a>

```csharp
public string ContentBase64Sha512 { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentHexsha512`<sup>Required</sup> <a name="ContentHexsha512" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentHexsha512"></a>

```csharp
public string ContentHexsha512 { get; }
```

- *Type:* string

---

##### `ContentLanguage`<sup>Required</sup> <a name="ContentLanguage" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentLanguage"></a>

```csharp
public string ContentLanguage { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `Crc32C`<sup>Required</sup> <a name="Crc32C" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.crc32C"></a>

```csharp
public string Crc32C { get; }
```

- *Type:* string

---

##### `CustomerEncryption`<sup>Required</sup> <a name="CustomerEncryption" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.customerEncryption"></a>

```csharp
public DataGoogleStorageBucketObjectContentCustomerEncryptionList CustomerEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList">DataGoogleStorageBucketObjectContentCustomerEncryptionList</a>

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.deletionPolicy"></a>

```csharp
public string DeletionPolicy { get; }
```

- *Type:* string

---

##### `DetectMd5Hash`<sup>Required</sup> <a name="DetectMd5Hash" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.detectMd5Hash"></a>

```csharp
public string DetectMd5Hash { get; }
```

- *Type:* string

---

##### `EventBasedHold`<sup>Required</sup> <a name="EventBasedHold" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.eventBasedHold"></a>

```csharp
public IResolvable EventBasedHold { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ForceEmptyContentType`<sup>Required</sup> <a name="ForceEmptyContentType" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.forceEmptyContentType"></a>

```csharp
public IResolvable ForceEmptyContentType { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Generation`<sup>Required</sup> <a name="Generation" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.generation"></a>

```csharp
public double Generation { get; }
```

- *Type:* double

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `Md5Hash`<sup>Required</sup> <a name="Md5Hash" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hash"></a>

```csharp
public string Md5Hash { get; }
```

- *Type:* string

---

##### `Md5Hexhash`<sup>Required</sup> <a name="Md5Hexhash" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.md5Hexhash"></a>

```csharp
public string Md5Hexhash { get; }
```

- *Type:* string

---

##### `MediaLink`<sup>Required</sup> <a name="MediaLink" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.mediaLink"></a>

```csharp
public string MediaLink { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.metadata"></a>

```csharp
public StringMap Metadata { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `OutputName`<sup>Required</sup> <a name="OutputName" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.outputName"></a>

```csharp
public string OutputName { get; }
```

- *Type:* string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.retention"></a>

```csharp
public DataGoogleStorageBucketObjectContentRetentionList Retention { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList">DataGoogleStorageBucketObjectContentRetentionList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.source"></a>

```csharp
public string Source { get; }
```

- *Type:* string

---

##### `SourceMd5Hash`<sup>Required</sup> <a name="SourceMd5Hash" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.sourceMd5Hash"></a>

```csharp
public string SourceMd5Hash { get; }
```

- *Type:* string

---

##### `StorageClass`<sup>Required</sup> <a name="StorageClass" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.storageClass"></a>

```csharp
public string StorageClass { get; }
```

- *Type:* string

---

##### `TemporaryHold`<sup>Required</sup> <a name="TemporaryHold" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.temporaryHold"></a>

```csharp
public IResolvable TemporaryHold { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectContentConfig <a name="DataGoogleStorageBucketObjectContentConfig" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Bucket,
    string Name,
    string Content = null,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.bucket">Bucket</a></code> | <code>string</code> | The name of the containing bucket. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.name">Name</a></code> | <code>string</code> | The name of the object. If you're interpolating the name of this object, see output_name instead. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.content">Content</a></code> | <code>string</code> | Data as string to be uploaded. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The name of the containing bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_bucket_object_content#bucket DataGoogleStorageBucketObjectContent#bucket}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the object. If you're interpolating the name of this object, see output_name instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_bucket_object_content#name DataGoogleStorageBucketObjectContent#name}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Data as string to be uploaded.

Must be defined if source is not. Note: The content field is marked as sensitive. To view the raw contents of the object, please define an output.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_bucket_object_content#content DataGoogleStorageBucketObjectContent#content}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_bucket_object_content#id DataGoogleStorageBucketObjectContent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageBucketObjectContentCustomerEncryption <a name="DataGoogleStorageBucketObjectContentCustomerEncryption" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContentCustomerEncryption {

};
```


### DataGoogleStorageBucketObjectContentRetention <a name="DataGoogleStorageBucketObjectContentRetention" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContentRetention {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectContentCustomerEncryptionList <a name="DataGoogleStorageBucketObjectContentCustomerEncryptionList" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContentCustomerEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get"></a>

```csharp
private DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference <a name="DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionAlgorithm">EncryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionKey">EncryptionKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption">DataGoogleStorageBucketObjectContentCustomerEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionAlgorithm`<sup>Required</sup> <a name="EncryptionAlgorithm" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionAlgorithm"></a>

```csharp
public string EncryptionAlgorithm { get; }
```

- *Type:* string

---

##### `EncryptionKey`<sup>Required</sup> <a name="EncryptionKey" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.encryptionKey"></a>

```csharp
public string EncryptionKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageBucketObjectContentCustomerEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentCustomerEncryption">DataGoogleStorageBucketObjectContentCustomerEncryption</a>

---


### DataGoogleStorageBucketObjectContentRetentionList <a name="DataGoogleStorageBucketObjectContentRetentionList" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContentRetentionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get"></a>

```csharp
private DataGoogleStorageBucketObjectContentRetentionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageBucketObjectContentRetentionOutputReference <a name="DataGoogleStorageBucketObjectContentRetentionOutputReference" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageBucketObjectContentRetentionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.retainUntilTime">RetainUntilTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention">DataGoogleStorageBucketObjectContentRetention</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RetainUntilTime`<sup>Required</sup> <a name="RetainUntilTime" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.retainUntilTime"></a>

```csharp
public string RetainUntilTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetentionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageBucketObjectContentRetention InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageBucketObjectContent.DataGoogleStorageBucketObjectContentRetention">DataGoogleStorageBucketObjectContentRetention</a>

---



