# `dataGoogleStorageInsightsDatasetConfig` Submodule <a name="`dataGoogleStorageInsightsDatasetConfig` Submodule" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageInsightsDatasetConfig <a name="DataGoogleStorageInsightsDatasetConfig" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config google_storage_insights_dataset_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfig(Construct Scope, string Id, DataGoogleStorageInsightsDatasetConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig">DataGoogleStorageInsightsDatasetConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig">DataGoogleStorageInsightsDatasetConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageInsightsDatasetConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageInsightsDatasetConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageInsightsDatasetConfig.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleStorageInsightsDatasetConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleStorageInsightsDatasetConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleStorageInsightsDatasetConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleStorageInsightsDatasetConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageInsightsDatasetConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigState">DatasetConfigState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets">ExcludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations">ExcludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.identity">Identity</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList">DataGoogleStorageInsightsDatasetConfigIdentityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets">IncludeCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations">IncludeCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets">IncludeNewlyCreatedBuckets</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.link">Link</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList">DataGoogleStorageInsightsDatasetConfigLinkList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.linkDataset">LinkDataset</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationNumber">OrganizationNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationScope">OrganizationScope</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.retentionPeriodDays">RetentionPeriodDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceFolders">SourceFolders</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList">DataGoogleStorageInsightsDatasetConfigSourceFoldersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceProjects">SourceProjects</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList">DataGoogleStorageInsightsDatasetConfigSourceProjectsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput">DatasetConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DatasetConfigState`<sup>Required</sup> <a name="DatasetConfigState" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigState"></a>

```csharp
public string DatasetConfigState { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludeCloudStorageBuckets`<sup>Required</sup> <a name="ExcludeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageBuckets"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList ExcludeCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList</a>

---

##### `ExcludeCloudStorageLocations`<sup>Required</sup> <a name="ExcludeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.excludeCloudStorageLocations"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList ExcludeCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList</a>

---

##### `Identity`<sup>Required</sup> <a name="Identity" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.identity"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIdentityList Identity { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList">DataGoogleStorageInsightsDatasetConfigIdentityList</a>

---

##### `IncludeCloudStorageBuckets`<sup>Required</sup> <a name="IncludeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageBuckets"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList IncludeCloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList</a>

---

##### `IncludeCloudStorageLocations`<sup>Required</sup> <a name="IncludeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeCloudStorageLocations"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList IncludeCloudStorageLocations { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList</a>

---

##### `IncludeNewlyCreatedBuckets`<sup>Required</sup> <a name="IncludeNewlyCreatedBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.includeNewlyCreatedBuckets"></a>

```csharp
public IResolvable IncludeNewlyCreatedBuckets { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.link"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigLinkList Link { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList">DataGoogleStorageInsightsDatasetConfigLinkList</a>

---

##### `LinkDataset`<sup>Required</sup> <a name="LinkDataset" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.linkDataset"></a>

```csharp
public IResolvable LinkDataset { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OrganizationNumber`<sup>Required</sup> <a name="OrganizationNumber" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationNumber"></a>

```csharp
public string OrganizationNumber { get; }
```

- *Type:* string

---

##### `OrganizationScope`<sup>Required</sup> <a name="OrganizationScope" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.organizationScope"></a>

```csharp
public IResolvable OrganizationScope { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RetentionPeriodDays`<sup>Required</sup> <a name="RetentionPeriodDays" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.retentionPeriodDays"></a>

```csharp
public double RetentionPeriodDays { get; }
```

- *Type:* double

---

##### `SourceFolders`<sup>Required</sup> <a name="SourceFolders" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceFolders"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigSourceFoldersList SourceFolders { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList">DataGoogleStorageInsightsDatasetConfigSourceFoldersList</a>

---

##### `SourceProjects`<sup>Required</sup> <a name="SourceProjects" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.sourceProjects"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigSourceProjectsList SourceProjects { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList">DataGoogleStorageInsightsDatasetConfigSourceProjectsList</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DatasetConfigIdInput`<sup>Optional</sup> <a name="DatasetConfigIdInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigIdInput"></a>

```csharp
public string DatasetConfigIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.datasetConfigId"></a>

```csharp
public string DatasetConfigId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageInsightsDatasetConfigConfig <a name="DataGoogleStorageInsightsDatasetConfigConfig" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DatasetConfigId,
    string Location,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId">DatasetConfigId</a></code> | <code>string</code> | The user-defined ID of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the DatasetConfig. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#id DataGoogleStorageInsightsDatasetConfig#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#project DataGoogleStorageInsightsDatasetConfig#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DatasetConfigId`<sup>Required</sup> <a name="DatasetConfigId" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.datasetConfigId"></a>

```csharp
public string DatasetConfigId { get; set; }
```

- *Type:* string

The user-defined ID of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#dataset_config_id DataGoogleStorageInsightsDatasetConfig#dataset_config_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the DatasetConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#location DataGoogleStorageInsightsDatasetConfig#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#id DataGoogleStorageInsightsDatasetConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/storage_insights_dataset_config#project DataGoogleStorageInsightsDatasetConfig#project}.

---

### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets {

};
```


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets {

};
```


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations {

};
```


### DataGoogleStorageInsightsDatasetConfigIdentity <a name="DataGoogleStorageInsightsDatasetConfigIdentity" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIdentity {

};
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets {

};
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets {

};
```


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations {

};
```


### DataGoogleStorageInsightsDatasetConfigLink <a name="DataGoogleStorageInsightsDatasetConfigLink" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigLink {

};
```


### DataGoogleStorageInsightsDatasetConfigSourceFolders <a name="DataGoogleStorageInsightsDatasetConfigSourceFolders" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigSourceFolders {

};
```


### DataGoogleStorageInsightsDatasetConfigSourceProjects <a name="DataGoogleStorageInsightsDatasetConfigSourceProjects" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigSourceProjects {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList CloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigExcludeCloudStorageLocations</a>

---


### DataGoogleStorageInsightsDatasetConfigIdentityList <a name="DataGoogleStorageInsightsDatasetConfigIdentityList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIdentityList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigIdentityOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIdentityOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIdentityOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIdentityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity">DataGoogleStorageInsightsDatasetConfigIdentity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentityOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIdentity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIdentity">DataGoogleStorageInsightsDatasetConfigIdentity</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex">BucketPrefixRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `BucketPrefixRegex`<sup>Required</sup> <a name="BucketPrefixRegex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.bucketPrefixRegex"></a>

```csharp
public string BucketPrefixRegex { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets">CloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudStorageBuckets`<sup>Required</sup> <a name="CloudStorageBuckets" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.cloudStorageBuckets"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList CloudStorageBuckets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsCloudStorageBucketsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBucketsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageBuckets</a>

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocationsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations">DataGoogleStorageInsightsDatasetConfigIncludeCloudStorageLocations</a>

---


### DataGoogleStorageInsightsDatasetConfigLinkList <a name="DataGoogleStorageInsightsDatasetConfigLinkList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigLinkList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigLinkOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigLinkOutputReference <a name="DataGoogleStorageInsightsDatasetConfigLinkOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigLinkOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked">Linked</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink">DataGoogleStorageInsightsDatasetConfigLink</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `Linked`<sup>Required</sup> <a name="Linked" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.linked"></a>

```csharp
public IResolvable Linked { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLinkOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigLink InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigLink">DataGoogleStorageInsightsDatasetConfigLink</a>

---


### DataGoogleStorageInsightsDatasetConfigSourceFoldersList <a name="DataGoogleStorageInsightsDatasetConfigSourceFoldersList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigSourceFoldersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference <a name="DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers">FolderNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders">DataGoogleStorageInsightsDatasetConfigSourceFolders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FolderNumbers`<sup>Required</sup> <a name="FolderNumbers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.folderNumbers"></a>

```csharp
public string[] FolderNumbers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFoldersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigSourceFolders InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceFolders">DataGoogleStorageInsightsDatasetConfigSourceFolders</a>

---


### DataGoogleStorageInsightsDatasetConfigSourceProjectsList <a name="DataGoogleStorageInsightsDatasetConfigSourceProjectsList" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigSourceProjectsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get"></a>

```csharp
private DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference <a name="DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers">ProjectNumbers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects">DataGoogleStorageInsightsDatasetConfigSourceProjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ProjectNumbers`<sup>Required</sup> <a name="ProjectNumbers" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.projectNumbers"></a>

```csharp
public string[] ProjectNumbers { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjectsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleStorageInsightsDatasetConfigSourceProjects InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleStorageInsightsDatasetConfig.DataGoogleStorageInsightsDatasetConfigSourceProjects">DataGoogleStorageInsightsDatasetConfigSourceProjects</a>

---



