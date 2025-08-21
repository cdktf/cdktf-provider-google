# `dataGoogleApphubDiscoveredWorkload` Submodule <a name="`dataGoogleApphubDiscoveredWorkload` Submodule" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubDiscoveredWorkload <a name="DataGoogleApphubDiscoveredWorkload" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload google_apphub_discovered_workload}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkload(Construct Scope, string Id, DataGoogleApphubDiscoveredWorkloadConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig">DataGoogleApphubDiscoveredWorkloadConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig">DataGoogleApphubDiscoveredWorkloadConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredWorkload.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredWorkload.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredWorkload.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredWorkload.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleApphubDiscoveredWorkload resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleApphubDiscoveredWorkload to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleApphubDiscoveredWorkload that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubDiscoveredWorkload to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties">WorkloadProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference">WorkloadReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput">WorkloadUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri">WorkloadUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `WorkloadProperties`<sup>Required</sup> <a name="WorkloadProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadProperties"></a>

```csharp
public DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList WorkloadProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList">DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList</a>

---

##### `WorkloadReference`<sup>Required</sup> <a name="WorkloadReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadReference"></a>

```csharp
public DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList WorkloadReference { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList">DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `WorkloadUriInput`<sup>Optional</sup> <a name="WorkloadUriInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUriInput"></a>

```csharp
public string WorkloadUriInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WorkloadUri`<sup>Required</sup> <a name="WorkloadUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.workloadUri"></a>

```csharp
public string WorkloadUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkload.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubDiscoveredWorkloadConfig <a name="DataGoogleApphubDiscoveredWorkloadConfig" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkloadConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string WorkloadUri,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri">WorkloadUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#location DataGoogleApphubDiscoveredWorkload#location}.

---

##### `WorkloadUri`<sup>Required</sup> <a name="WorkloadUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.workloadUri"></a>

```csharp
public string WorkloadUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#workload_uri DataGoogleApphubDiscoveredWorkload#workload_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#id DataGoogleApphubDiscoveredWorkload#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/data-sources/apphub_discovered_workload#project DataGoogleApphubDiscoveredWorkload#project}.

---

### DataGoogleApphubDiscoveredWorkloadWorkloadProperties <a name="DataGoogleApphubDiscoveredWorkloadWorkloadProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkloadWorkloadProperties {

};
```


### DataGoogleApphubDiscoveredWorkloadWorkloadReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkloadWorkloadReference {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get"></a>

```csharp
private DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject">GcpProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpProject`<sup>Required</sup> <a name="GcpProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.gcpProject"></a>

```csharp
public string GcpProject { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadPropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleApphubDiscoveredWorkloadWorkloadProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadProperties">DataGoogleApphubDiscoveredWorkloadWorkloadProperties</a>

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get"></a>

```csharp
private DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference <a name="DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReferenceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleApphubDiscoveredWorkloadWorkloadReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredWorkload.DataGoogleApphubDiscoveredWorkloadWorkloadReference">DataGoogleApphubDiscoveredWorkloadWorkloadReference</a>

---



