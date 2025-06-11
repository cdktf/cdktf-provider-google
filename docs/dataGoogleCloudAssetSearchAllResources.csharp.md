# `dataGoogleCloudAssetSearchAllResources` Submodule <a name="`dataGoogleCloudAssetSearchAllResources` Submodule" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCloudAssetSearchAllResources <a name="DataGoogleCloudAssetSearchAllResources" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources google_cloud_asset_search_all_resources}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudAssetSearchAllResources(Construct Scope, string Id, DataGoogleCloudAssetSearchAllResourcesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig">DataGoogleCloudAssetSearchAllResourcesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig">DataGoogleCloudAssetSearchAllResourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes">ResetAssetTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery">ResetQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetAssetTypes` <a name="ResetAssetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetAssetTypes"></a>

```csharp
private void ResetAssetTypes()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.resetQuery"></a>

```csharp
private void ResetQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudAssetSearchAllResources.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudAssetSearchAllResources.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudAssetSearchAllResources.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCloudAssetSearchAllResources.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCloudAssetSearchAllResources resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCloudAssetSearchAllResources to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCloudAssetSearchAllResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCloudAssetSearchAllResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results">Results</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput">AssetTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput">QueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query">Query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope">Scope</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Results`<sup>Required</sup> <a name="Results" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.results"></a>

```csharp
public DataGoogleCloudAssetSearchAllResourcesResultsList Results { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList">DataGoogleCloudAssetSearchAllResourcesResultsList</a>

---

##### `AssetTypesInput`<sup>Optional</sup> <a name="AssetTypesInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypesInput"></a>

```csharp
public string[] AssetTypesInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.queryInput"></a>

```csharp
public string QueryInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `AssetTypes`<sup>Required</sup> <a name="AssetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.assetTypes"></a>

```csharp
public string[] AssetTypes { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.query"></a>

```csharp
public string Query { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResources.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCloudAssetSearchAllResourcesConfig <a name="DataGoogleCloudAssetSearchAllResourcesConfig" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudAssetSearchAllResourcesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Scope,
    string[] AssetTypes = null,
    string Id = null,
    string Query = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope">Scope</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes">AssetTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query">Query</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#scope DataGoogleCloudAssetSearchAllResources#scope}.

---

##### `AssetTypes`<sup>Optional</sup> <a name="AssetTypes" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.assetTypes"></a>

```csharp
public string[] AssetTypes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#asset_types DataGoogleCloudAssetSearchAllResources#asset_types}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#id DataGoogleCloudAssetSearchAllResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesConfig.property.query"></a>

```csharp
public string Query { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/cloud_asset_search_all_resources#query DataGoogleCloudAssetSearchAllResources#query}.

---

### DataGoogleCloudAssetSearchAllResourcesResults <a name="DataGoogleCloudAssetSearchAllResourcesResults" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudAssetSearchAllResourcesResults {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCloudAssetSearchAllResourcesResultsList <a name="DataGoogleCloudAssetSearchAllResourcesResultsList" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudAssetSearchAllResourcesResultsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get"></a>

```csharp
private DataGoogleCloudAssetSearchAllResourcesResultsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCloudAssetSearchAllResourcesResultsOutputReference <a name="DataGoogleCloudAssetSearchAllResourcesResultsOutputReference" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCloudAssetSearchAllResourcesResultsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType">AssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders">Folders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys">KmsKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags">NetworkTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization">Organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType">ParentAssetType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName">ParentFullResourceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssetType`<sup>Required</sup> <a name="AssetType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.assetType"></a>

```csharp
public string AssetType { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Folders`<sup>Required</sup> <a name="Folders" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.folders"></a>

```csharp
public string[] Folders { get; }
```

- *Type:* string[]

---

##### `KmsKeys`<sup>Required</sup> <a name="KmsKeys" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.kmsKeys"></a>

```csharp
public string[] KmsKeys { get; }
```

- *Type:* string[]

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkTags`<sup>Required</sup> <a name="NetworkTags" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.networkTags"></a>

```csharp
public string[] NetworkTags { get; }
```

- *Type:* string[]

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.organization"></a>

```csharp
public string Organization { get; }
```

- *Type:* string

---

##### `ParentAssetType`<sup>Required</sup> <a name="ParentAssetType" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentAssetType"></a>

```csharp
public string ParentAssetType { get; }
```

- *Type:* string

---

##### `ParentFullResourceName`<sup>Required</sup> <a name="ParentFullResourceName" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.parentFullResourceName"></a>

```csharp
public string ParentFullResourceName { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResultsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCloudAssetSearchAllResourcesResults InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCloudAssetSearchAllResources.DataGoogleCloudAssetSearchAllResourcesResults">DataGoogleCloudAssetSearchAllResourcesResults</a>

---



