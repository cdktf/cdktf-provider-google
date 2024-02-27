# `dataGoogleContainerEngineVersions` Submodule <a name="`dataGoogleContainerEngineVersions` Submodule" id="@cdktf/provider-google.dataGoogleContainerEngineVersions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleContainerEngineVersions <a name="DataGoogleContainerEngineVersions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions google_container_engine_versions}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleContainerEngineVersions(Construct Scope, string Id, DataGoogleContainerEngineVersionsConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig">DataGoogleContainerEngineVersionsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig">DataGoogleContainerEngineVersionsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix">ResetVersionPrefix</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetVersionPrefix` <a name="ResetVersionPrefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.resetVersionPrefix"></a>

```csharp
private void ResetVersionPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleContainerEngineVersions resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleContainerEngineVersions.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleContainerEngineVersions.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleContainerEngineVersions.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleContainerEngineVersions.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleContainerEngineVersions resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleContainerEngineVersions to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleContainerEngineVersions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleContainerEngineVersions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion">DefaultClusterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion">LatestMasterVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion">LatestNodeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion">ReleaseChannelDefaultVersion</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion">ReleaseChannelLatestVersion</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions">ValidMasterVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions">ValidNodeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput">VersionPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix">VersionPrefix</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `DefaultClusterVersion`<sup>Required</sup> <a name="DefaultClusterVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.defaultClusterVersion"></a>

```csharp
public string DefaultClusterVersion { get; }
```

- *Type:* string

---

##### `LatestMasterVersion`<sup>Required</sup> <a name="LatestMasterVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestMasterVersion"></a>

```csharp
public string LatestMasterVersion { get; }
```

- *Type:* string

---

##### `LatestNodeVersion`<sup>Required</sup> <a name="LatestNodeVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.latestNodeVersion"></a>

```csharp
public string LatestNodeVersion { get; }
```

- *Type:* string

---

##### `ReleaseChannelDefaultVersion`<sup>Required</sup> <a name="ReleaseChannelDefaultVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelDefaultVersion"></a>

```csharp
public StringMap ReleaseChannelDefaultVersion { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ReleaseChannelLatestVersion`<sup>Required</sup> <a name="ReleaseChannelLatestVersion" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.releaseChannelLatestVersion"></a>

```csharp
public StringMap ReleaseChannelLatestVersion { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ValidMasterVersions`<sup>Required</sup> <a name="ValidMasterVersions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validMasterVersions"></a>

```csharp
public string[] ValidMasterVersions { get; }
```

- *Type:* string[]

---

##### `ValidNodeVersions`<sup>Required</sup> <a name="ValidNodeVersions" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.validNodeVersions"></a>

```csharp
public string[] ValidNodeVersions { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `VersionPrefixInput`<sup>Optional</sup> <a name="VersionPrefixInput" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefixInput"></a>

```csharp
public string VersionPrefixInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `VersionPrefix`<sup>Required</sup> <a name="VersionPrefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.versionPrefix"></a>

```csharp
public string VersionPrefix { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersions.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleContainerEngineVersionsConfig <a name="DataGoogleContainerEngineVersionsConfig" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleContainerEngineVersionsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Id = null,
    string Location = null,
    string Project = null,
    string VersionPrefix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix">VersionPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#id DataGoogleContainerEngineVersions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#location DataGoogleContainerEngineVersions#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#project DataGoogleContainerEngineVersions#project}.

---

##### `VersionPrefix`<sup>Optional</sup> <a name="VersionPrefix" id="@cdktf/provider-google.dataGoogleContainerEngineVersions.DataGoogleContainerEngineVersionsConfig.property.versionPrefix"></a>

```csharp
public string VersionPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.18.0/docs/data-sources/container_engine_versions#version_prefix DataGoogleContainerEngineVersions#version_prefix}.

---



