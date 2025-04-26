# `dataGoogleComputeMachineTypes` Submodule <a name="`dataGoogleComputeMachineTypes` Submodule" id="@cdktf/provider-google.dataGoogleComputeMachineTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeMachineTypes <a name="DataGoogleComputeMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types google_compute_machine_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypes(Construct Scope, string Id, DataGoogleComputeMachineTypesConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig">DataGoogleComputeMachineTypesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig">DataGoogleComputeMachineTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeMachineTypes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeMachineTypes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeMachineTypes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeMachineTypes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComputeMachineTypes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeMachineTypes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeMachineTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeMachineTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes">MachineTypes</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `MachineTypes`<sup>Required</sup> <a name="MachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.machineTypes"></a>

```csharp
public DataGoogleComputeMachineTypesMachineTypesList MachineTypes { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList">DataGoogleComputeMachineTypesMachineTypesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeMachineTypesConfig <a name="DataGoogleComputeMachineTypesConfig" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Filter = null,
    string Id = null,
    string Project = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter">Filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project">Project</a></code> | <code>string</code> | Project ID for this request. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone">Zone</a></code> | <code>string</code> | The name of the zone for this request. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types#filter DataGoogleComputeMachineTypes#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types#id DataGoogleComputeMachineTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Project ID for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types#project DataGoogleComputeMachineTypes#project}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The name of the zone for this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/compute_machine_types#zone DataGoogleComputeMachineTypes#zone}

---

### DataGoogleComputeMachineTypesMachineTypes <a name="DataGoogleComputeMachineTypesMachineTypes" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypes {

};
```


### DataGoogleComputeMachineTypesMachineTypesAccelerators <a name="DataGoogleComputeMachineTypesMachineTypesAccelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesAccelerators {

};
```


### DataGoogleComputeMachineTypesMachineTypesDeprecated <a name="DataGoogleComputeMachineTypesMachineTypesDeprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesDeprecated {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeMachineTypesMachineTypesAcceleratorsList <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesAcceleratorsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get"></a>

```csharp
private DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount">GuestAcceleratorCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType">GuestAcceleratorType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GuestAcceleratorCount`<sup>Required</sup> <a name="GuestAcceleratorCount" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorCount"></a>

```csharp
public double GuestAcceleratorCount { get; }
```

- *Type:* double

---

##### `GuestAcceleratorType`<sup>Required</sup> <a name="GuestAcceleratorType" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.guestAcceleratorType"></a>

```csharp
public string GuestAcceleratorType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeMachineTypesMachineTypesAccelerators InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAccelerators">DataGoogleComputeMachineTypesMachineTypesAccelerators</a>

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedList <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesDeprecatedList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get"></a>

```csharp
private DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement">Replacement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Replacement`<sup>Required</sup> <a name="Replacement" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.replacement"></a>

```csharp
public string Replacement { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeMachineTypesMachineTypesDeprecated InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecated">DataGoogleComputeMachineTypesMachineTypesDeprecated</a>

---


### DataGoogleComputeMachineTypesMachineTypesList <a name="DataGoogleComputeMachineTypesMachineTypesList" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get"></a>

```csharp
private DataGoogleComputeMachineTypesMachineTypesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeMachineTypesMachineTypesOutputReference <a name="DataGoogleComputeMachineTypesMachineTypesOutputReference" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeMachineTypesMachineTypesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators">Accelerators</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated">Deprecated</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus">GuestCpus</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus">IsSharedCpus</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks">MaximumPersistentDisks</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb">MaximumPersistentDisksSizeGb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb">MemoryMb</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink">SelfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Accelerators`<sup>Required</sup> <a name="Accelerators" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.accelerators"></a>

```csharp
public DataGoogleComputeMachineTypesMachineTypesAcceleratorsList Accelerators { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesAcceleratorsList">DataGoogleComputeMachineTypesMachineTypesAcceleratorsList</a>

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.deprecated"></a>

```csharp
public DataGoogleComputeMachineTypesMachineTypesDeprecatedList Deprecated { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesDeprecatedList">DataGoogleComputeMachineTypesMachineTypesDeprecatedList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `GuestCpus`<sup>Required</sup> <a name="GuestCpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.guestCpus"></a>

```csharp
public double GuestCpus { get; }
```

- *Type:* double

---

##### `IsSharedCpus`<sup>Required</sup> <a name="IsSharedCpus" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.isSharedCpus"></a>

```csharp
public IResolvable IsSharedCpus { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MaximumPersistentDisks`<sup>Required</sup> <a name="MaximumPersistentDisks" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisks"></a>

```csharp
public double MaximumPersistentDisks { get; }
```

- *Type:* double

---

##### `MaximumPersistentDisksSizeGb`<sup>Required</sup> <a name="MaximumPersistentDisksSizeGb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.maximumPersistentDisksSizeGb"></a>

```csharp
public double MaximumPersistentDisksSizeGb { get; }
```

- *Type:* double

---

##### `MemoryMb`<sup>Required</sup> <a name="MemoryMb" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.memoryMb"></a>

```csharp
public double MemoryMb { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.selfLink"></a>

```csharp
public string SelfLink { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeMachineTypesMachineTypes InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeMachineTypes.DataGoogleComputeMachineTypesMachineTypes">DataGoogleComputeMachineTypesMachineTypes</a>

---



