# `dataGoogleParameterManagerRegionalParameters` Submodule <a name="`dataGoogleParameterManagerRegionalParameters` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerRegionalParameters <a name="DataGoogleParameterManagerRegionalParameters" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters google_parameter_manager_regional_parameters}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParameters(Construct Scope, string Id, DataGoogleParameterManagerRegionalParametersConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig">DataGoogleParameterManagerRegionalParametersConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig">DataGoogleParameterManagerRegionalParametersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameters resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameters.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameters.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameters.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameters.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameters resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleParameterManagerRegionalParameters to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleParameterManagerRegionalParameters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerRegionalParameters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.parameters">Parameters</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList">DataGoogleParameterManagerRegionalParametersParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Parameters`<sup>Required</sup> <a name="Parameters" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.parameters"></a>

```csharp
public DataGoogleParameterManagerRegionalParametersParametersList Parameters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList">DataGoogleParameterManagerRegionalParametersParametersList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParameters.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerRegionalParametersConfig <a name="DataGoogleParameterManagerRegionalParametersConfig" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParametersConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Filter = null,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.filter">Filter</a></code> | <code>string</code> | Filter string, adhering to the rules in List-operation filtering. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#location DataGoogleParameterManagerRegionalParameters#location}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter string, adhering to the rules in List-operation filtering.

List only parameters matching the filter.
If filter is empty, all regional parameters are listed from specific location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#filter DataGoogleParameterManagerRegionalParameters#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#id DataGoogleParameterManagerRegionalParameters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/parameter_manager_regional_parameters#project DataGoogleParameterManagerRegionalParameters#project}.

---

### DataGoogleParameterManagerRegionalParametersParameters <a name="DataGoogleParameterManagerRegionalParametersParameters" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParametersParameters {

};
```


### DataGoogleParameterManagerRegionalParametersParametersPolicyMember <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMember" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParametersParametersPolicyMember {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleParameterManagerRegionalParametersParametersList <a name="DataGoogleParameterManagerRegionalParametersParametersList" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParametersParametersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get"></a>

```csharp
private DataGoogleParameterManagerRegionalParametersParametersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleParameterManagerRegionalParametersParametersOutputReference <a name="DataGoogleParameterManagerRegionalParametersParametersOutputReference" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParametersParametersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.kmsKey">KmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.parameterId">ParameterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.policyMember">PolicyMember</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList">DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters">DataGoogleParameterManagerRegionalParametersParameters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.kmsKey"></a>

```csharp
public string KmsKey { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParameterId`<sup>Required</sup> <a name="ParameterId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.parameterId"></a>

```csharp
public string ParameterId { get; }
```

- *Type:* string

---

##### `PolicyMember`<sup>Required</sup> <a name="PolicyMember" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.policyMember"></a>

```csharp
public DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList PolicyMember { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList">DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList</a>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersOutputReference.property.internalValue"></a>

```csharp
public DataGoogleParameterManagerRegionalParametersParameters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParameters">DataGoogleParameterManagerRegionalParametersParameters</a>

---


### DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get"></a>

```csharp
private DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference <a name="DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal">IamPolicyNamePrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal">IamPolicyUidPrincipal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember">DataGoogleParameterManagerRegionalParametersParametersPolicyMember</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IamPolicyNamePrincipal`<sup>Required</sup> <a name="IamPolicyNamePrincipal" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyNamePrincipal"></a>

```csharp
public string IamPolicyNamePrincipal { get; }
```

- *Type:* string

---

##### `IamPolicyUidPrincipal`<sup>Required</sup> <a name="IamPolicyUidPrincipal" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.iamPolicyUidPrincipal"></a>

```csharp
public string IamPolicyUidPrincipal { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMemberOutputReference.property.internalValue"></a>

```csharp
public DataGoogleParameterManagerRegionalParametersParametersPolicyMember InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameters.DataGoogleParameterManagerRegionalParametersParametersPolicyMember">DataGoogleParameterManagerRegionalParametersParametersPolicyMember</a>

---



