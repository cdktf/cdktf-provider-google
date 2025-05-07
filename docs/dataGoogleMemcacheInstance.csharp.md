# `dataGoogleMemcacheInstance` Submodule <a name="`dataGoogleMemcacheInstance` Submodule" id="@cdktf/provider-google.dataGoogleMemcacheInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMemcacheInstance <a name="DataGoogleMemcacheInstance" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance google_memcache_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstance(Construct Scope, string Id, DataGoogleMemcacheInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig">DataGoogleMemcacheInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig">DataGoogleMemcacheInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMemcacheInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemcacheInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemcacheInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemcacheInstance.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMemcacheInstance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleMemcacheInstance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleMemcacheInstance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleMemcacheInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMemcacheInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.discoveryEndpoint">DiscoveryEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenancePolicy">MaintenancePolicy</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList">DataGoogleMemcacheInstanceMaintenancePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenanceSchedule">MaintenanceSchedule</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList">DataGoogleMemcacheInstanceMaintenanceScheduleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheFullVersion">MemcacheFullVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheNodes">MemcacheNodes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList">DataGoogleMemcacheInstanceMemcacheNodesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheParameters">MemcacheParameters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList">DataGoogleMemcacheInstanceMemcacheParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheVersion">MemcacheVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeConfig">NodeConfig</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList">DataGoogleMemcacheInstanceNodeConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeCount">NodeCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.reservedIpRangeId">ReservedIpRangeId</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.zones">Zones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.authorizedNetwork"></a>

```csharp
public string AuthorizedNetwork { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `DiscoveryEndpoint`<sup>Required</sup> <a name="DiscoveryEndpoint" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.discoveryEndpoint"></a>

```csharp
public string DiscoveryEndpoint { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `MaintenancePolicy`<sup>Required</sup> <a name="MaintenancePolicy" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenancePolicy"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenancePolicyList MaintenancePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList">DataGoogleMemcacheInstanceMaintenancePolicyList</a>

---

##### `MaintenanceSchedule`<sup>Required</sup> <a name="MaintenanceSchedule" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.maintenanceSchedule"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenanceScheduleList MaintenanceSchedule { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList">DataGoogleMemcacheInstanceMaintenanceScheduleList</a>

---

##### `MemcacheFullVersion`<sup>Required</sup> <a name="MemcacheFullVersion" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheFullVersion"></a>

```csharp
public string MemcacheFullVersion { get; }
```

- *Type:* string

---

##### `MemcacheNodes`<sup>Required</sup> <a name="MemcacheNodes" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheNodes"></a>

```csharp
public DataGoogleMemcacheInstanceMemcacheNodesList MemcacheNodes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList">DataGoogleMemcacheInstanceMemcacheNodesList</a>

---

##### `MemcacheParameters`<sup>Required</sup> <a name="MemcacheParameters" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheParameters"></a>

```csharp
public DataGoogleMemcacheInstanceMemcacheParametersList MemcacheParameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList">DataGoogleMemcacheInstanceMemcacheParametersList</a>

---

##### `MemcacheVersion`<sup>Required</sup> <a name="MemcacheVersion" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.memcacheVersion"></a>

```csharp
public string MemcacheVersion { get; }
```

- *Type:* string

---

##### `NodeConfig`<sup>Required</sup> <a name="NodeConfig" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeConfig"></a>

```csharp
public DataGoogleMemcacheInstanceNodeConfigList NodeConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList">DataGoogleMemcacheInstanceNodeConfigList</a>

---

##### `NodeCount`<sup>Required</sup> <a name="NodeCount" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nodeCount"></a>

```csharp
public double NodeCount { get; }
```

- *Type:* double

---

##### `ReservedIpRangeId`<sup>Required</sup> <a name="ReservedIpRangeId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.reservedIpRangeId"></a>

```csharp
public string[] ReservedIpRangeId { get; }
```

- *Type:* string[]

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Zones`<sup>Required</sup> <a name="Zones" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.zones"></a>

```csharp
public string[] Zones { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMemcacheInstanceConfig <a name="DataGoogleMemcacheInstanceConfig" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null,
    string Region = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.name">Name</a></code> | <code>string</code> | The resource name of the instance. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance#id DataGoogleMemcacheInstance#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance#project DataGoogleMemcacheInstance#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.region">Region</a></code> | <code>string</code> | The region of the Memcache instance. If it is not provided, the provider region is used. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The resource name of the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance#name DataGoogleMemcacheInstance#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance#id DataGoogleMemcacheInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance#project DataGoogleMemcacheInstance#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the Memcache instance. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/data-sources/memcache_instance#region DataGoogleMemcacheInstance#region}

---

### DataGoogleMemcacheInstanceMaintenancePolicy <a name="DataGoogleMemcacheInstanceMaintenancePolicy" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicy {

};
```


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow {

};
```


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime {

};
```


### DataGoogleMemcacheInstanceMaintenanceSchedule <a name="DataGoogleMemcacheInstanceMaintenanceSchedule" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenanceSchedule {

};
```


### DataGoogleMemcacheInstanceMemcacheNodes <a name="DataGoogleMemcacheInstanceMemcacheNodes" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMemcacheNodes {

};
```


### DataGoogleMemcacheInstanceMemcacheParameters <a name="DataGoogleMemcacheInstanceMemcacheParameters" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMemcacheParameters {

};
```


### DataGoogleMemcacheInstanceNodeConfig <a name="DataGoogleMemcacheInstanceNodeConfig" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceNodeConfig {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMemcacheInstanceMaintenancePolicyList <a name="DataGoogleMemcacheInstanceMaintenancePolicyList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.get"></a>

```csharp
private DataGoogleMemcacheInstanceMaintenancePolicyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemcacheInstanceMaintenancePolicyOutputReference <a name="DataGoogleMemcacheInstanceMaintenancePolicyOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow">WeeklyMaintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy">DataGoogleMemcacheInstanceMaintenancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `WeeklyMaintenanceWindow`<sup>Required</sup> <a name="WeeklyMaintenanceWindow" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.weeklyMaintenanceWindow"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList WeeklyMaintenanceWindow { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenancePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicy">DataGoogleMemcacheInstanceMaintenancePolicy</a>

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get"></a>

```csharp
private DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day">Day</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime">StartTime</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.day"></a>

```csharp
public string Day { get; }
```

- *Type:* string

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.startTime"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList StartTime { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindow</a>

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get"></a>

```csharp
private DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference <a name="DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours">Hours</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes">Minutes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos">Nanos</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds">Seconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Hours`<sup>Required</sup> <a name="Hours" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.hours"></a>

```csharp
public double Hours { get; }
```

- *Type:* double

---

##### `Minutes`<sup>Required</sup> <a name="Minutes" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.minutes"></a>

```csharp
public double Minutes { get; }
```

- *Type:* double

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.nanos"></a>

```csharp
public double Nanos { get; }
```

- *Type:* double

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.seconds"></a>

```csharp
public double Seconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTimeOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime">DataGoogleMemcacheInstanceMaintenancePolicyWeeklyMaintenanceWindowStartTime</a>

---


### DataGoogleMemcacheInstanceMaintenanceScheduleList <a name="DataGoogleMemcacheInstanceMaintenanceScheduleList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenanceScheduleList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.get"></a>

```csharp
private DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference <a name="DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime">ScheduleDeadlineTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule">DataGoogleMemcacheInstanceMaintenanceSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `ScheduleDeadlineTime`<sup>Required</sup> <a name="ScheduleDeadlineTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.scheduleDeadlineTime"></a>

```csharp
public string ScheduleDeadlineTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceScheduleOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemcacheInstanceMaintenanceSchedule InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMaintenanceSchedule">DataGoogleMemcacheInstanceMaintenanceSchedule</a>

---


### DataGoogleMemcacheInstanceMemcacheNodesList <a name="DataGoogleMemcacheInstanceMemcacheNodesList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMemcacheNodesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.get"></a>

```csharp
private DataGoogleMemcacheInstanceMemcacheNodesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemcacheInstanceMemcacheNodesOutputReference <a name="DataGoogleMemcacheInstanceMemcacheNodesOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMemcacheNodesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId">NodeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes">DataGoogleMemcacheInstanceMemcacheNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `NodeId`<sup>Required</sup> <a name="NodeId" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.nodeId"></a>

```csharp
public string NodeId { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemcacheInstanceMemcacheNodes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheNodes">DataGoogleMemcacheInstanceMemcacheNodes</a>

---


### DataGoogleMemcacheInstanceMemcacheParametersList <a name="DataGoogleMemcacheInstanceMemcacheParametersList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMemcacheParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.get"></a>

```csharp
private DataGoogleMemcacheInstanceMemcacheParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemcacheInstanceMemcacheParametersOutputReference <a name="DataGoogleMemcacheInstanceMemcacheParametersOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceMemcacheParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.params">Params</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters">DataGoogleMemcacheInstanceMemcacheParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.params"></a>

```csharp
public StringMap Params { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParametersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemcacheInstanceMemcacheParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceMemcacheParameters">DataGoogleMemcacheInstanceMemcacheParameters</a>

---


### DataGoogleMemcacheInstanceNodeConfigList <a name="DataGoogleMemcacheInstanceNodeConfigList" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceNodeConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.get"></a>

```csharp
private DataGoogleMemcacheInstanceNodeConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMemcacheInstanceNodeConfigOutputReference <a name="DataGoogleMemcacheInstanceNodeConfigOutputReference" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMemcacheInstanceNodeConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount">CpuCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb">MemorySizeMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig">DataGoogleMemcacheInstanceNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuCount`<sup>Required</sup> <a name="CpuCount" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.cpuCount"></a>

```csharp
public double CpuCount { get; }
```

- *Type:* double

---

##### `MemorySizeMb`<sup>Required</sup> <a name="MemorySizeMb" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.memorySizeMb"></a>

```csharp
public double MemorySizeMb { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfigOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMemcacheInstanceNodeConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMemcacheInstance.DataGoogleMemcacheInstanceNodeConfig">DataGoogleMemcacheInstanceNodeConfig</a>

---



