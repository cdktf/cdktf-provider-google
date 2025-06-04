# `dataGoogleAlloydbInstance` Submodule <a name="`dataGoogleAlloydbInstance` Submodule" id="@cdktf/provider-google.dataGoogleAlloydbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleAlloydbInstance <a name="DataGoogleAlloydbInstance" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance google_alloydb_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstance(Construct Scope, string Id, DataGoogleAlloydbInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig">DataGoogleAlloydbInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig">DataGoogleAlloydbInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleAlloydbInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleAlloydbInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleAlloydbInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleAlloydbInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleAlloydbInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleAlloydbInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleAlloydbInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleAlloydbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleAlloydbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.activationPolicy">ActivationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.annotations">Annotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.availabilityType">AvailabilityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clientConnectionConfig">ClientConnectionConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList">DataGoogleAlloydbInstanceClientConnectionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cluster">Cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.databaseFlags">DatabaseFlags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.gceZone">GceZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceType">InstanceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.machineConfig">MachineConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList">DataGoogleAlloydbInstanceMachineConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.networkConfig">NetworkConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList">DataGoogleAlloydbInstanceNetworkConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.outboundPublicIpAddresses">OutboundPublicIpAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.pscInstanceConfig">PscInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList">DataGoogleAlloydbInstancePscInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.publicIpAddress">PublicIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.queryInsightsConfig">QueryInsightsConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList">DataGoogleAlloydbInstanceQueryInsightsConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.readPoolConfig">ReadPoolConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList">DataGoogleAlloydbInstanceReadPoolConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.reconciling">Reconciling</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterIdInput">ClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterId">ClusterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ActivationPolicy`<sup>Required</sup> <a name="ActivationPolicy" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.activationPolicy"></a>

```csharp
public string ActivationPolicy { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.annotations"></a>

```csharp
public StringMap Annotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `AvailabilityType`<sup>Required</sup> <a name="AvailabilityType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.availabilityType"></a>

```csharp
public string AvailabilityType { get; }
```

- *Type:* string

---

##### `ClientConnectionConfig`<sup>Required</sup> <a name="ClientConnectionConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clientConnectionConfig"></a>

```csharp
public DataGoogleAlloydbInstanceClientConnectionConfigList ClientConnectionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList">DataGoogleAlloydbInstanceClientConnectionConfigList</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.cluster"></a>

```csharp
public string Cluster { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DatabaseFlags`<sup>Required</sup> <a name="DatabaseFlags" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.databaseFlags"></a>

```csharp
public StringMap DatabaseFlags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GceZone`<sup>Required</sup> <a name="GceZone" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.gceZone"></a>

```csharp
public string GceZone { get; }
```

- *Type:* string

---

##### `InstanceType`<sup>Required</sup> <a name="InstanceType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceType"></a>

```csharp
public string InstanceType { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MachineConfig`<sup>Required</sup> <a name="MachineConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.machineConfig"></a>

```csharp
public DataGoogleAlloydbInstanceMachineConfigList MachineConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList">DataGoogleAlloydbInstanceMachineConfigList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NetworkConfig`<sup>Required</sup> <a name="NetworkConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.networkConfig"></a>

```csharp
public DataGoogleAlloydbInstanceNetworkConfigList NetworkConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList">DataGoogleAlloydbInstanceNetworkConfigList</a>

---

##### `OutboundPublicIpAddresses`<sup>Required</sup> <a name="OutboundPublicIpAddresses" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.outboundPublicIpAddresses"></a>

```csharp
public string[] OutboundPublicIpAddresses { get; }
```

- *Type:* string[]

---

##### `PscInstanceConfig`<sup>Required</sup> <a name="PscInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.pscInstanceConfig"></a>

```csharp
public DataGoogleAlloydbInstancePscInstanceConfigList PscInstanceConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList">DataGoogleAlloydbInstancePscInstanceConfigList</a>

---

##### `PublicIpAddress`<sup>Required</sup> <a name="PublicIpAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.publicIpAddress"></a>

```csharp
public string PublicIpAddress { get; }
```

- *Type:* string

---

##### `QueryInsightsConfig`<sup>Required</sup> <a name="QueryInsightsConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.queryInsightsConfig"></a>

```csharp
public DataGoogleAlloydbInstanceQueryInsightsConfigList QueryInsightsConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList">DataGoogleAlloydbInstanceQueryInsightsConfigList</a>

---

##### `ReadPoolConfig`<sup>Required</sup> <a name="ReadPoolConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.readPoolConfig"></a>

```csharp
public DataGoogleAlloydbInstanceReadPoolConfigList ReadPoolConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList">DataGoogleAlloydbInstanceReadPoolConfigList</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.reconciling"></a>

```csharp
public IResolvable Reconciling { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterIdInput"></a>

```csharp
public string ClusterIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.clusterId"></a>

```csharp
public string ClusterId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleAlloydbInstanceClientConnectionConfig <a name="DataGoogleAlloydbInstanceClientConnectionConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceClientConnectionConfig {

};
```


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfig <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceClientConnectionConfigSslConfig {

};
```


### DataGoogleAlloydbInstanceConfig <a name="DataGoogleAlloydbInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string ClusterId,
    string InstanceId,
    string Id = null,
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.clusterId">ClusterId</a></code> | <code>string</code> | The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | The ID of the alloydb instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.location">Location</a></code> | <code>string</code> | The canonical ID for the location. For example: "us-east1". |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.project">Project</a></code> | <code>string</code> | Project ID of the project. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.clusterId"></a>

```csharp
public string ClusterId { get; set; }
```

- *Type:* string

The ID of the alloydb cluster that the instance belongs to.'alloydb_cluster_id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance#cluster_id DataGoogleAlloydbInstance#cluster_id}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

The ID of the alloydb instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance#instance_id DataGoogleAlloydbInstance#instance_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance#id DataGoogleAlloydbInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The canonical ID for the location. For example: "us-east1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance#location DataGoogleAlloydbInstance#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Project ID of the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.38.0/docs/data-sources/alloydb_instance#project DataGoogleAlloydbInstance#project}

---

### DataGoogleAlloydbInstanceMachineConfig <a name="DataGoogleAlloydbInstanceMachineConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceMachineConfig {

};
```


### DataGoogleAlloydbInstanceNetworkConfig <a name="DataGoogleAlloydbInstanceNetworkConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceNetworkConfig {

};
```


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks {

};
```


### DataGoogleAlloydbInstancePscInstanceConfig <a name="DataGoogleAlloydbInstancePscInstanceConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfig {

};
```


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections {

};
```


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs {

};
```


### DataGoogleAlloydbInstanceQueryInsightsConfig <a name="DataGoogleAlloydbInstanceQueryInsightsConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceQueryInsightsConfig {

};
```


### DataGoogleAlloydbInstanceReadPoolConfig <a name="DataGoogleAlloydbInstanceReadPoolConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceReadPoolConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleAlloydbInstanceClientConnectionConfigList <a name="DataGoogleAlloydbInstanceClientConnectionConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceClientConnectionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get"></a>

```csharp
private DataGoogleAlloydbInstanceClientConnectionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstanceClientConnectionConfigOutputReference <a name="DataGoogleAlloydbInstanceClientConnectionConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceClientConnectionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors">RequireConnectors</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig">SslConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList">DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig">DataGoogleAlloydbInstanceClientConnectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RequireConnectors`<sup>Required</sup> <a name="RequireConnectors" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.requireConnectors"></a>

```csharp
public IResolvable RequireConnectors { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `SslConfig`<sup>Required</sup> <a name="SslConfig" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.sslConfig"></a>

```csharp
public DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList SslConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList">DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstanceClientConnectionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfig">DataGoogleAlloydbInstanceClientConnectionConfig</a>

---


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get"></a>

```csharp
private DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference <a name="DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode">SslMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig">DataGoogleAlloydbInstanceClientConnectionConfigSslConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.sslMode"></a>

```csharp
public string SslMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstanceClientConnectionConfigSslConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceClientConnectionConfigSslConfig">DataGoogleAlloydbInstanceClientConnectionConfigSslConfig</a>

---


### DataGoogleAlloydbInstanceMachineConfigList <a name="DataGoogleAlloydbInstanceMachineConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceMachineConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get"></a>

```csharp
private DataGoogleAlloydbInstanceMachineConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstanceMachineConfigOutputReference <a name="DataGoogleAlloydbInstanceMachineConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceMachineConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount">CpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.machineType">MachineType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig">DataGoogleAlloydbInstanceMachineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.cpuCount"></a>

```csharp
public double CpuCount { get; }
```

- *Type:* double

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.machineType"></a>

```csharp
public string MachineType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstanceMachineConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceMachineConfig">DataGoogleAlloydbInstanceMachineConfig</a>

---


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get"></a>

```csharp
private DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference <a name="DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange">CidrRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CidrRange`<sup>Required</sup> <a name="CidrRange" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.cidrRange"></a>

```csharp
public string CidrRange { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworks</a>

---


### DataGoogleAlloydbInstanceNetworkConfigList <a name="DataGoogleAlloydbInstanceNetworkConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceNetworkConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get"></a>

```csharp
private DataGoogleAlloydbInstanceNetworkConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstanceNetworkConfigOutputReference <a name="DataGoogleAlloydbInstanceNetworkConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceNetworkConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks">AuthorizedExternalNetworks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp">EnableOutboundPublicIp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp">EnablePublicIp</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig">DataGoogleAlloydbInstanceNetworkConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthorizedExternalNetworks`<sup>Required</sup> <a name="AuthorizedExternalNetworks" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.authorizedExternalNetworks"></a>

```csharp
public DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList AuthorizedExternalNetworks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList">DataGoogleAlloydbInstanceNetworkConfigAuthorizedExternalNetworksList</a>

---

##### `EnableOutboundPublicIp`<sup>Required</sup> <a name="EnableOutboundPublicIp" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enableOutboundPublicIp"></a>

```csharp
public IResolvable EnableOutboundPublicIp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EnablePublicIp`<sup>Required</sup> <a name="EnablePublicIp" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.enablePublicIp"></a>

```csharp
public IResolvable EnablePublicIp { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstanceNetworkConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceNetworkConfig">DataGoogleAlloydbInstanceNetworkConfig</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigList <a name="DataGoogleAlloydbInstancePscInstanceConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get"></a>

```csharp
private DataGoogleAlloydbInstancePscInstanceConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstancePscInstanceConfigOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects">AllowedConsumerProjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections">PscAutoConnections</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName">PscDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs">PscInterfaceConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink">ServiceAttachmentLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig">DataGoogleAlloydbInstancePscInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowedConsumerProjects`<sup>Required</sup> <a name="AllowedConsumerProjects" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.allowedConsumerProjects"></a>

```csharp
public string[] AllowedConsumerProjects { get; }
```

- *Type:* string[]

---

##### `PscAutoConnections`<sup>Required</sup> <a name="PscAutoConnections" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscAutoConnections"></a>

```csharp
public DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList PscAutoConnections { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList</a>

---

##### `PscDnsName`<sup>Required</sup> <a name="PscDnsName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscDnsName"></a>

```csharp
public string PscDnsName { get; }
```

- *Type:* string

---

##### `PscInterfaceConfigs`<sup>Required</sup> <a name="PscInterfaceConfigs" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.pscInterfaceConfigs"></a>

```csharp
public DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList PscInterfaceConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList</a>

---

##### `ServiceAttachmentLink`<sup>Required</sup> <a name="ServiceAttachmentLink" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.serviceAttachmentLink"></a>

```csharp
public string ServiceAttachmentLink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstancePscInstanceConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfig">DataGoogleAlloydbInstancePscInstanceConfig</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get"></a>

```csharp
private DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork">ConsumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus">ConsumerNetworkStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject">ConsumerProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ConsumerNetwork`<sup>Required</sup> <a name="ConsumerNetwork" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetwork"></a>

```csharp
public string ConsumerNetwork { get; }
```

- *Type:* string

---

##### `ConsumerNetworkStatus`<sup>Required</sup> <a name="ConsumerNetworkStatus" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerNetworkStatus"></a>

```csharp
public string ConsumerNetworkStatus { get; }
```

- *Type:* string

---

##### `ConsumerProject`<sup>Required</sup> <a name="ConsumerProject" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.consumerProject"></a>

```csharp
public string ConsumerProject { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnectionsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections">DataGoogleAlloydbInstancePscInstanceConfigPscAutoConnections</a>

---


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get"></a>

```csharp
private DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference <a name="DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource">NetworkAttachmentResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NetworkAttachmentResource`<sup>Required</sup> <a name="NetworkAttachmentResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.networkAttachmentResource"></a>

```csharp
public string NetworkAttachmentResource { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs">DataGoogleAlloydbInstancePscInstanceConfigPscInterfaceConfigs</a>

---


### DataGoogleAlloydbInstanceQueryInsightsConfigList <a name="DataGoogleAlloydbInstanceQueryInsightsConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceQueryInsightsConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get"></a>

```csharp
private DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference <a name="DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute">QueryPlansPerMinute</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength">QueryStringLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags">RecordApplicationTags</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress">RecordClientAddress</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig">DataGoogleAlloydbInstanceQueryInsightsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `QueryPlansPerMinute`<sup>Required</sup> <a name="QueryPlansPerMinute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryPlansPerMinute"></a>

```csharp
public double QueryPlansPerMinute { get; }
```

- *Type:* double

---

##### `QueryStringLength`<sup>Required</sup> <a name="QueryStringLength" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.queryStringLength"></a>

```csharp
public double QueryStringLength { get; }
```

- *Type:* double

---

##### `RecordApplicationTags`<sup>Required</sup> <a name="RecordApplicationTags" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordApplicationTags"></a>

```csharp
public IResolvable RecordApplicationTags { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `RecordClientAddress`<sup>Required</sup> <a name="RecordClientAddress" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.recordClientAddress"></a>

```csharp
public IResolvable RecordClientAddress { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstanceQueryInsightsConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceQueryInsightsConfig">DataGoogleAlloydbInstanceQueryInsightsConfig</a>

---


### DataGoogleAlloydbInstanceReadPoolConfigList <a name="DataGoogleAlloydbInstanceReadPoolConfigList" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceReadPoolConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get"></a>

```csharp
private DataGoogleAlloydbInstanceReadPoolConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleAlloydbInstanceReadPoolConfigOutputReference <a name="DataGoogleAlloydbInstanceReadPoolConfigOutputReference" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleAlloydbInstanceReadPoolConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig">DataGoogleAlloydbInstanceReadPoolConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleAlloydbInstanceReadPoolConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleAlloydbInstance.DataGoogleAlloydbInstanceReadPoolConfig">DataGoogleAlloydbInstanceReadPoolConfig</a>

---



