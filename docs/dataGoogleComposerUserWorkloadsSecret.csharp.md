# `dataGoogleComposerUserWorkloadsSecret` Submodule <a name="`dataGoogleComposerUserWorkloadsSecret` Submodule" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComposerUserWorkloadsSecret <a name="DataGoogleComposerUserWorkloadsSecret" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret google_composer_user_workloads_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComposerUserWorkloadsSecret(Construct Scope, string Id, DataGoogleComposerUserWorkloadsSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig">DataGoogleComposerUserWorkloadsSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig">DataGoogleComposerUserWorkloadsSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComposerUserWorkloadsSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComposerUserWorkloadsSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComposerUserWorkloadsSecret.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComposerUserWorkloadsSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComposerUserWorkloadsSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComposerUserWorkloadsSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComposerUserWorkloadsSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComposerUserWorkloadsSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.data">Data</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.data"></a>

```csharp
public StringMap Data { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComposerUserWorkloadsSecretConfig <a name="DataGoogleComposerUserWorkloadsSecretConfig" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComposerUserWorkloadsSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Environment,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.environment">Environment</a></code> | <code>string</code> | Name of the environment. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.name">Name</a></code> | <code>string</code> | Name of the secret. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret#id DataGoogleComposerUserWorkloadsSecret#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.project">Project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.region">Region</a></code> | <code>string</code> | The location or Compute Engine region for the environment. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret#environment DataGoogleComposerUserWorkloadsSecret#environment}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret#name DataGoogleComposerUserWorkloadsSecret#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret#id DataGoogleComposerUserWorkloadsSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret#project DataGoogleComposerUserWorkloadsSecret#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComposerUserWorkloadsSecret.DataGoogleComposerUserWorkloadsSecretConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The location or Compute Engine region for the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/composer_user_workloads_secret#region DataGoogleComposerUserWorkloadsSecret#region}

---



