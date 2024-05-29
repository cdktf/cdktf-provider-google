# `dataGoogleComputeRouterStatus` Submodule <a name="`dataGoogleComputeRouterStatus` Submodule" id="@cdktf/provider-google.dataGoogleComputeRouterStatus"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRouterStatus <a name="DataGoogleComputeRouterStatus" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_router_status google_compute_router_status}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatus(Construct Scope, string Id, DataGoogleComputeRouterStatusConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig">DataGoogleComputeRouterStatusConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig">DataGoogleComputeRouterStatusConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.resetRegion"></a>

```csharp
private void ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeRouterStatus resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeRouterStatus.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeRouterStatus.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeRouterStatus.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeRouterStatus.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComputeRouterStatus resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRouterStatus to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRouterStatus that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_router_status#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRouterStatus to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutes">BestRoutes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList">DataGoogleComputeRouterStatusBestRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutesForRouter">BestRoutesForRouter</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList">DataGoogleComputeRouterStatusBestRoutesForRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.region">Region</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `BestRoutes`<sup>Required</sup> <a name="BestRoutes" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutes"></a>

```csharp
public DataGoogleComputeRouterStatusBestRoutesList BestRoutes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList">DataGoogleComputeRouterStatusBestRoutesList</a>

---

##### `BestRoutesForRouter`<sup>Required</sup> <a name="BestRoutesForRouter" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.bestRoutesForRouter"></a>

```csharp
public DataGoogleComputeRouterStatusBestRoutesForRouterList BestRoutesForRouter { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList">DataGoogleComputeRouterStatusBestRoutesForRouterList</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatus.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRouterStatusBestRoutes <a name="DataGoogleComputeRouterStatusBestRoutes" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatusBestRoutes {

};
```


### DataGoogleComputeRouterStatusBestRoutesForRouter <a name="DataGoogleComputeRouterStatusBestRoutesForRouter" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatusBestRoutesForRouter {

};
```


### DataGoogleComputeRouterStatusConfig <a name="DataGoogleComputeRouterStatusConfig" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatusConfig {
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
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.name">Name</a></code> | <code>string</code> | Name of the router to query. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.project">Project</a></code> | <code>string</code> | Project ID of the target router. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.region">Region</a></code> | <code>string</code> | Region of the target router. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the router to query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_router_status#name DataGoogleComputeRouterStatus#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_router_status#id DataGoogleComputeRouterStatus#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Project ID of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_router_status#project DataGoogleComputeRouterStatus#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region of the target router.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/data-sources/compute_router_status#region DataGoogleComputeRouterStatus#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRouterStatusBestRoutesForRouterList <a name="DataGoogleComputeRouterStatusBestRoutesForRouterList" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatusBestRoutesForRouterList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get"></a>

```csharp
private DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.destRange">DestRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopGateway">NextHopGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIlb">NextHopIlb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstance">NextHopInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstanceZone">NextHopInstanceZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIp">NextHopIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopNetwork">NextHopNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopVpnTunnel">NextHopVpnTunnel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter">DataGoogleComputeRouterStatusBestRoutesForRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestRange`<sup>Required</sup> <a name="DestRange" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.destRange"></a>

```csharp
public string DestRange { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NextHopGateway`<sup>Required</sup> <a name="NextHopGateway" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopGateway"></a>

```csharp
public string NextHopGateway { get; }
```

- *Type:* string

---

##### `NextHopIlb`<sup>Required</sup> <a name="NextHopIlb" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIlb"></a>

```csharp
public string NextHopIlb { get; }
```

- *Type:* string

---

##### `NextHopInstance`<sup>Required</sup> <a name="NextHopInstance" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstance"></a>

```csharp
public string NextHopInstance { get; }
```

- *Type:* string

---

##### `NextHopInstanceZone`<sup>Required</sup> <a name="NextHopInstanceZone" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopInstanceZone"></a>

```csharp
public string NextHopInstanceZone { get; }
```

- *Type:* string

---

##### `NextHopIp`<sup>Required</sup> <a name="NextHopIp" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopIp"></a>

```csharp
public string NextHopIp { get; }
```

- *Type:* string

---

##### `NextHopNetwork`<sup>Required</sup> <a name="NextHopNetwork" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopNetwork"></a>

```csharp
public string NextHopNetwork { get; }
```

- *Type:* string

---

##### `NextHopVpnTunnel`<sup>Required</sup> <a name="NextHopVpnTunnel" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.nextHopVpnTunnel"></a>

```csharp
public string NextHopVpnTunnel { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouterOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRouterStatusBestRoutesForRouter InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesForRouter">DataGoogleComputeRouterStatusBestRoutesForRouter</a>

---


### DataGoogleComputeRouterStatusBestRoutesList <a name="DataGoogleComputeRouterStatusBestRoutesList" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatusBestRoutesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get"></a>

```csharp
private DataGoogleComputeRouterStatusBestRoutesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeRouterStatusBestRoutesOutputReference <a name="DataGoogleComputeRouterStatusBestRoutesOutputReference" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeRouterStatusBestRoutesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.destRange">DestRange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopGateway">NextHopGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIlb">NextHopIlb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstance">NextHopInstance</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstanceZone">NextHopInstanceZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIp">NextHopIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopNetwork">NextHopNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopVpnTunnel">NextHopVpnTunnel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes">DataGoogleComputeRouterStatusBestRoutes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DestRange`<sup>Required</sup> <a name="DestRange" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.destRange"></a>

```csharp
public string DestRange { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `NextHopGateway`<sup>Required</sup> <a name="NextHopGateway" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopGateway"></a>

```csharp
public string NextHopGateway { get; }
```

- *Type:* string

---

##### `NextHopIlb`<sup>Required</sup> <a name="NextHopIlb" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIlb"></a>

```csharp
public string NextHopIlb { get; }
```

- *Type:* string

---

##### `NextHopInstance`<sup>Required</sup> <a name="NextHopInstance" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstance"></a>

```csharp
public string NextHopInstance { get; }
```

- *Type:* string

---

##### `NextHopInstanceZone`<sup>Required</sup> <a name="NextHopInstanceZone" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopInstanceZone"></a>

```csharp
public string NextHopInstanceZone { get; }
```

- *Type:* string

---

##### `NextHopIp`<sup>Required</sup> <a name="NextHopIp" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopIp"></a>

```csharp
public string NextHopIp { get; }
```

- *Type:* string

---

##### `NextHopNetwork`<sup>Required</sup> <a name="NextHopNetwork" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopNetwork"></a>

```csharp
public string NextHopNetwork { get; }
```

- *Type:* string

---

##### `NextHopVpnTunnel`<sup>Required</sup> <a name="NextHopVpnTunnel" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.nextHopVpnTunnel"></a>

```csharp
public string NextHopVpnTunnel { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeRouterStatusBestRoutes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeRouterStatus.DataGoogleComputeRouterStatusBestRoutes">DataGoogleComputeRouterStatusBestRoutes</a>

---



