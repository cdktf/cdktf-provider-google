# `dataGoogleParameterManagerParameterVersionRender` Submodule <a name="`dataGoogleParameterManagerParameterVersionRender` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerParameterVersionRender <a name="DataGoogleParameterManagerParameterVersionRender" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render google_parameter_manager_parameter_version_render}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerParameterVersionRender(Construct Scope, string Id, DataGoogleParameterManagerParameterVersionRenderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig">DataGoogleParameterManagerParameterVersionRenderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig">DataGoogleParameterManagerParameterVersionRenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerParameterVersionRender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerParameterVersionRender.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerParameterVersionRender.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerParameterVersionRender.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerParameterVersionRender.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleParameterManagerParameterVersionRender resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleParameterManagerParameterVersionRender to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleParameterManagerParameterVersionRender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerParameterVersionRender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterData">ParameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.renderedParameterData">RenderedParameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterInput">ParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameter">Parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterData"></a>

```csharp
public string ParameterData { get; }
```

- *Type:* string

---

##### `RenderedParameterData`<sup>Required</sup> <a name="RenderedParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.renderedParameterData"></a>

```csharp
public string RenderedParameterData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterInput"></a>

```csharp
public string ParameterInput { get; }
```

- *Type:* string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionIdInput"></a>

```csharp
public string ParameterVersionIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameter"></a>

```csharp
public string Parameter { get; }
```

- *Type:* string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRender.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerParameterVersionRenderConfig <a name="DataGoogleParameterManagerParameterVersionRenderConfig" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerParameterVersionRenderConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Parameter,
    string ParameterVersionId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameter">Parameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#parameter DataGoogleParameterManagerParameterVersionRender#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#parameter_version_id DataGoogleParameterManagerParameterVersionRender#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#id DataGoogleParameterManagerParameterVersionRender#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#project DataGoogleParameterManagerParameterVersionRender#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameter"></a>

```csharp
public string Parameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#parameter DataGoogleParameterManagerParameterVersionRender#parameter}.

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#parameter_version_id DataGoogleParameterManagerParameterVersionRender#parameter_version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#id DataGoogleParameterManagerParameterVersionRender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerParameterVersionRender.DataGoogleParameterManagerParameterVersionRenderConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/data-sources/parameter_manager_parameter_version_render#project DataGoogleParameterManagerParameterVersionRender#project}.

---



