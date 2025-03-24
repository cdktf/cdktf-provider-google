# `dataGoogleMemorystoreInstance` Submodule <a name="`dataGoogleMemorystoreInstance` Submodule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMemorystoreInstance <a name="DataGoogleMemorystoreInstance" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance google_memorystore_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstance(Construct Scope, string Id, DataGoogleMemorystoreInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig">DataGoogleMemorystoreInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig">DataGoogleMemorystoreInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemorystoreInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemorystoreInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemorystoreInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemorystoreInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleMemorystoreInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleMemorystoreInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleMemorystoreInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMemorystoreInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.authorizationMode">AuthorizationMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.deletionProtectionEnabled">DeletionProtectionEnabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.desiredPscAutoConnections">DesiredPscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList">DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.discoveryEndpoints">DiscoveryEndpoints</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList">DataGoogleMemorystoreInstanceDiscoveryEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.endpoints">Endpoints</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList">DataGoogleMemorystoreInstanceEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineConfigs">EngineConfigs</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineVersion">EngineVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList">DataGoogleMemorystoreInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeType">NodeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.persistenceConfig">PersistenceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList">DataGoogleMemorystoreInstancePersistenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.pscAutoConnections">PscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList">DataGoogleMemorystoreInstancePscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.replicaCount">ReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.shardCount">ShardCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.stateInfo">StateInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList">DataGoogleMemorystoreInstanceStateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.transitEncryptionMode">TransitEncryptionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.zoneDistributionConfig">ZoneDistributionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList">DataGoogleMemorystoreInstanceZoneDistributionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthorizationMode`<sup>Required</sup> <a name="AuthorizationMode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.authorizationMode"></a>

```csharp
public string AuthorizationMode { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DeletionProtectionEnabled`<sup>Required</sup> <a name="DeletionProtectionEnabled" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.deletionProtectionEnabled"></a>

```csharp
public IResolvable DeletionProtectionEnabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `DesiredPscAutoConnections`<sup>Required</sup> <a name="DesiredPscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.desiredPscAutoConnections"></a>

```csharp
public DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList DesiredPscAutoConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList">DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList</a>

---

##### `DiscoveryEndpoints`<sup>Required</sup> <a name="DiscoveryEndpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.discoveryEndpoints"></a>

```csharp
public DataGoogleMemorystoreInstanceDiscoveryEndpointsList DiscoveryEndpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList">DataGoogleMemorystoreInstanceDiscoveryEndpointsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.endpoints"></a>

```csharp
public DataGoogleMemorystoreInstanceEndpointsList Endpoints { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList">DataGoogleMemorystoreInstanceEndpointsList</a>

---

##### `EngineConfigs`<sup>Required</sup> <a name="EngineConfigs" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineConfigs"></a>

```csharp
public StringMap EngineConfigs { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EngineVersion`<sup>Required</sup> <a name="EngineVersion" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.engineVersion"></a>

```csharp
public string EngineVersion { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeConfig"></a>

```csharp
public DataGoogleMemorystoreInstanceNodeConfigList NodeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList">DataGoogleMemorystoreInstanceNodeConfigList</a>

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.nodeType"></a>

```csharp
public string NodeType { get; }
```

- *Type:* string

---

##### `PersistenceConfig`<sup>Required</sup> <a name="PersistenceConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.persistenceConfig"></a>

```csharp
public DataGoogleMemorystoreInstancePersistenceConfigList PersistenceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList">DataGoogleMemorystoreInstancePersistenceConfigList</a>

---

##### `PscAutoConnections`<sup>Required</sup> <a name="PscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.pscAutoConnections"></a>

```csharp
public DataGoogleMemorystoreInstancePscAutoConnectionsList PscAutoConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList">DataGoogleMemorystoreInstancePscAutoConnectionsList</a>

---

##### `ReplicaCount`<sup>Required</sup> <a name="ReplicaCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.replicaCount"></a>

```csharp
public double ReplicaCount { get; }
```

- *Type:* double

---

##### `ShardCount`<sup>Required</sup> <a name="ShardCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.shardCount"></a>

```csharp
public double ShardCount { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `StateInfo`<sup>Required</sup> <a name="StateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.stateInfo"></a>

```csharp
public DataGoogleMemorystoreInstanceStateInfoList StateInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList">DataGoogleMemorystoreInstanceStateInfoList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TransitEncryptionMode`<sup>Required</sup> <a name="TransitEncryptionMode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.transitEncryptionMode"></a>

```csharp
public string TransitEncryptionMode { get; }
```

- *Type:* string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ZoneDistributionConfig`<sup>Required</sup> <a name="ZoneDistributionConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.zoneDistributionConfig"></a>

```csharp
public DataGoogleMemorystoreInstanceZoneDistributionConfigList ZoneDistributionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList">DataGoogleMemorystoreInstanceZoneDistributionConfigList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMemorystoreInstanceConfig <a name="DataGoogleMemorystoreInstanceConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Required. The ID to use for the instance, which will become the final component of the instance's resource name. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance#id DataGoogleMemorystoreInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance#project DataGoogleMemorystoreInstance#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Required. The ID to use for the instance, which will become the final component of the instance's resource name.

This value is subject to the following restrictions:

* Must be 4-63 characters in length
* Must begin with a letter or digit
* Must contain only lowercase letters, digits, and hyphens
* Must not end with a hyphen
* Must be unique within a location

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance#instance_id DataGoogleMemorystoreInstance#instance_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance#id DataGoogleMemorystoreInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'.

It identifies the resource within its parent collection as described in https://google.aip.dev/122. See documentation for resource type 'memorystore.googleapis.com/CertificateAuthority'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance#location DataGoogleMemorystoreInstance#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/data-sources/memorystore_instance#project DataGoogleMemorystoreInstance#project}.

---

### DataGoogleMemorystoreInstanceDesiredPscAutoConnections <a name="DataGoogleMemorystoreInstanceDesiredPscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceDesiredPscAutoConnections {

};
```


### DataGoogleMemorystoreInstanceDiscoveryEndpoints <a name="DataGoogleMemorystoreInstanceDiscoveryEndpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceDiscoveryEndpoints {

};
```


### DataGoogleMemorystoreInstanceEndpoints <a name="DataGoogleMemorystoreInstanceEndpoints" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpoints {

};
```


### DataGoogleMemorystoreInstanceEndpointsConnections <a name="DataGoogleMemorystoreInstanceEndpointsConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsConnections {

};
```


### DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection {

};
```


### DataGoogleMemorystoreInstanceNodeConfig <a name="DataGoogleMemorystoreInstanceNodeConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceNodeConfig {

};
```


### DataGoogleMemorystoreInstancePersistenceConfig <a name="DataGoogleMemorystoreInstancePersistenceConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfig {

};
```


### DataGoogleMemorystoreInstancePersistenceConfigAofConfig <a name="DataGoogleMemorystoreInstancePersistenceConfigAofConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigAofConfig {

};
```


### DataGoogleMemorystoreInstancePersistenceConfigRdbConfig <a name="DataGoogleMemorystoreInstancePersistenceConfigRdbConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigRdbConfig {

};
```


### DataGoogleMemorystoreInstancePscAutoConnections <a name="DataGoogleMemorystoreInstancePscAutoConnections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePscAutoConnections {

};
```


### DataGoogleMemorystoreInstanceStateInfo <a name="DataGoogleMemorystoreInstanceStateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceStateInfo {

};
```


### DataGoogleMemorystoreInstanceStateInfoUpdateInfo <a name="DataGoogleMemorystoreInstanceStateInfoUpdateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceStateInfoUpdateInfo {

};
```


### DataGoogleMemorystoreInstanceZoneDistributionConfig <a name="DataGoogleMemorystoreInstanceZoneDistributionConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceZoneDistributionConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList <a name="DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference <a name="DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections">DataGoogleMemorystoreInstanceDesiredPscAutoConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceDesiredPscAutoConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDesiredPscAutoConnections">DataGoogleMemorystoreInstanceDesiredPscAutoConnections</a>

---


### DataGoogleMemorystoreInstanceDiscoveryEndpointsList <a name="DataGoogleMemorystoreInstanceDiscoveryEndpointsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceDiscoveryEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference <a name="DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints">DataGoogleMemorystoreInstanceDiscoveryEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceDiscoveryEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceDiscoveryEndpoints">DataGoogleMemorystoreInstanceDiscoveryEndpoints</a>

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsList <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection">PscAutoConnection</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections">DataGoogleMemorystoreInstanceEndpointsConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PscAutoConnection`<sup>Required</sup> <a name="PscAutoConnection" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.pscAutoConnection"></a>

```csharp
public DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList PscAutoConnection { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceEndpointsConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnections">DataGoogleMemorystoreInstanceEndpointsConnections</a>

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference <a name="DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnectionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection">DataGoogleMemorystoreInstanceEndpointsConnectionsPscAutoConnection</a>

---


### DataGoogleMemorystoreInstanceEndpointsList <a name="DataGoogleMemorystoreInstanceEndpointsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceEndpointsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceEndpointsOutputReference <a name="DataGoogleMemorystoreInstanceEndpointsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceEndpointsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.connections">Connections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList">DataGoogleMemorystoreInstanceEndpointsConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints">DataGoogleMemorystoreInstanceEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Connections`<sup>Required</sup> <a name="Connections" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.connections"></a>

```csharp
public DataGoogleMemorystoreInstanceEndpointsConnectionsList Connections { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsConnectionsList">DataGoogleMemorystoreInstanceEndpointsConnectionsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpointsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceEndpoints InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceEndpoints">DataGoogleMemorystoreInstanceEndpoints</a>

---


### DataGoogleMemorystoreInstanceNodeConfigList <a name="DataGoogleMemorystoreInstanceNodeConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceNodeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceNodeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceNodeConfigOutputReference <a name="DataGoogleMemorystoreInstanceNodeConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb">SizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig">DataGoogleMemorystoreInstanceNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SizeGb`<sup>Required</sup> <a name="SizeGb" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.sizeGb"></a>

```csharp
public double SizeGb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceNodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceNodeConfig">DataGoogleMemorystoreInstanceNodeConfig</a>

---


### DataGoogleMemorystoreInstancePersistenceConfigAofConfigList <a name="DataGoogleMemorystoreInstancePersistenceConfigAofConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigAofConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.get"></a>

```csharp
private DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference <a name="DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync">AppendFsync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig">DataGoogleMemorystoreInstancePersistenceConfigAofConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AppendFsync`<sup>Required</sup> <a name="AppendFsync" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.appendFsync"></a>

```csharp
public string AppendFsync { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstancePersistenceConfigAofConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfig">DataGoogleMemorystoreInstancePersistenceConfigAofConfig</a>

---


### DataGoogleMemorystoreInstancePersistenceConfigList <a name="DataGoogleMemorystoreInstancePersistenceConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.get"></a>

```csharp
private DataGoogleMemorystoreInstancePersistenceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstancePersistenceConfigOutputReference <a name="DataGoogleMemorystoreInstancePersistenceConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig">AofConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList">DataGoogleMemorystoreInstancePersistenceConfigAofConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig">RdbConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList">DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig">DataGoogleMemorystoreInstancePersistenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AofConfig`<sup>Required</sup> <a name="AofConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.aofConfig"></a>

```csharp
public DataGoogleMemorystoreInstancePersistenceConfigAofConfigList AofConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigAofConfigList">DataGoogleMemorystoreInstancePersistenceConfigAofConfigList</a>

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `RdbConfig`<sup>Required</sup> <a name="RdbConfig" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.rdbConfig"></a>

```csharp
public DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList RdbConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList">DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstancePersistenceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfig">DataGoogleMemorystoreInstancePersistenceConfig</a>

---


### DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList <a name="DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.get"></a>

```csharp
private DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference <a name="DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod">RdbSnapshotPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime">RdbSnapshotStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig">DataGoogleMemorystoreInstancePersistenceConfigRdbConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RdbSnapshotPeriod`<sup>Required</sup> <a name="RdbSnapshotPeriod" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotPeriod"></a>

```csharp
public string RdbSnapshotPeriod { get; }
```

- *Type:* string

---

##### `RdbSnapshotStartTime`<sup>Required</sup> <a name="RdbSnapshotStartTime" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.rdbSnapshotStartTime"></a>

```csharp
public string RdbSnapshotStartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstancePersistenceConfigRdbConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePersistenceConfigRdbConfig">DataGoogleMemorystoreInstancePersistenceConfigRdbConfig</a>

---


### DataGoogleMemorystoreInstancePscAutoConnectionsList <a name="DataGoogleMemorystoreInstancePscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePscAutoConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.get"></a>

```csharp
private DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference <a name="DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType">ConnectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule">ForwardingRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId">PscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus">PscConnectionStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections">DataGoogleMemorystoreInstancePscAutoConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.connectionType"></a>

```csharp
public string ConnectionType { get; }
```

- *Type:* string

---

##### `ForwardingRule`<sup>Required</sup> <a name="ForwardingRule" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.forwardingRule"></a>

```csharp
public string ForwardingRule { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `PscConnectionId`<sup>Required</sup> <a name="PscConnectionId" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionId"></a>

```csharp
public string PscConnectionId { get; }
```

- *Type:* string

---

##### `PscConnectionStatus`<sup>Required</sup> <a name="PscConnectionStatus" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.pscConnectionStatus"></a>

```csharp
public string PscConnectionStatus { get; }
```

- *Type:* string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.serviceAttachment"></a>

```csharp
public string ServiceAttachment { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstancePscAutoConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstancePscAutoConnections">DataGoogleMemorystoreInstancePscAutoConnections</a>

---


### DataGoogleMemorystoreInstanceStateInfoList <a name="DataGoogleMemorystoreInstanceStateInfoList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceStateInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceStateInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceStateInfoOutputReference <a name="DataGoogleMemorystoreInstanceStateInfoOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceStateInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo">UpdateInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList">DataGoogleMemorystoreInstanceStateInfoUpdateInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo">DataGoogleMemorystoreInstanceStateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UpdateInfo`<sup>Required</sup> <a name="UpdateInfo" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.updateInfo"></a>

```csharp
public DataGoogleMemorystoreInstanceStateInfoUpdateInfoList UpdateInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList">DataGoogleMemorystoreInstanceStateInfoUpdateInfoList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceStateInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfo">DataGoogleMemorystoreInstanceStateInfo</a>

---


### DataGoogleMemorystoreInstanceStateInfoUpdateInfoList <a name="DataGoogleMemorystoreInstanceStateInfoUpdateInfoList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceStateInfoUpdateInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference <a name="DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount">TargetReplicaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount">TargetShardCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo">DataGoogleMemorystoreInstanceStateInfoUpdateInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetReplicaCount`<sup>Required</sup> <a name="TargetReplicaCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetReplicaCount"></a>

```csharp
public double TargetReplicaCount { get; }
```

- *Type:* double

---

##### `TargetShardCount`<sup>Required</sup> <a name="TargetShardCount" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.targetShardCount"></a>

```csharp
public double TargetShardCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceStateInfoUpdateInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceStateInfoUpdateInfo">DataGoogleMemorystoreInstanceStateInfoUpdateInfo</a>

---


### DataGoogleMemorystoreInstanceZoneDistributionConfigList <a name="DataGoogleMemorystoreInstanceZoneDistributionConfigList" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceZoneDistributionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.get"></a>

```csharp
private DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference <a name="DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig">DataGoogleMemorystoreInstanceZoneDistributionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemorystoreInstanceZoneDistributionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemorystoreInstance.DataGoogleMemorystoreInstanceZoneDistributionConfig">DataGoogleMemorystoreInstanceZoneDistributionConfig</a>

---



