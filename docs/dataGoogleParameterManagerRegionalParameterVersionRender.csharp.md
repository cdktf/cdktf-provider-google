# `dataGoogleParameterManagerRegionalParameterVersionRender` Submodule <a name="`dataGoogleParameterManagerRegionalParameterVersionRender` Submodule" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleParameterManagerRegionalParameterVersionRender <a name="DataGoogleParameterManagerRegionalParameterVersionRender" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render google_parameter_manager_regional_parameter_version_render}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParameterVersionRender(Construct Scope, string Id, DataGoogleParameterManagerRegionalParameterVersionRenderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig">DataGoogleParameterManagerRegionalParameterVersionRenderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig">DataGoogleParameterManagerRegionalParameterVersionRenderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameterVersionRender resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameterVersionRender.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameterVersionRender.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameterVersionRender.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleParameterManagerRegionalParameterVersionRender.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleParameterManagerRegionalParameterVersionRender resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleParameterManagerRegionalParameterVersionRender to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleParameterManagerRegionalParameterVersionRender that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleParameterManagerRegionalParameterVersionRender to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.disabled">Disabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterData">ParameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.renderedParameterData">RenderedParameterData</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterInput">ParameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionIdInput">ParameterVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameter">Parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.disabled"></a>

```csharp
public IResolvable Disabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParameterData`<sup>Required</sup> <a name="ParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterData"></a>

```csharp
public string ParameterData { get; }
```

- *Type:* string

---

##### `RenderedParameterData`<sup>Required</sup> <a name="RenderedParameterData" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.renderedParameterData"></a>

```csharp
public string RenderedParameterData { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ParameterInput`<sup>Optional</sup> <a name="ParameterInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterInput"></a>

```csharp
public string ParameterInput { get; }
```

- *Type:* string

---

##### `ParameterVersionIdInput`<sup>Optional</sup> <a name="ParameterVersionIdInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionIdInput"></a>

```csharp
public string ParameterVersionIdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameter"></a>

```csharp
public string Parameter { get; }
```

- *Type:* string

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRender.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleParameterManagerRegionalParameterVersionRenderConfig <a name="DataGoogleParameterManagerRegionalParameterVersionRenderConfig" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleParameterManagerRegionalParameterVersionRenderConfig {
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
    string Location = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameter">Parameter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter DataGoogleParameterManagerRegionalParameterVersionRender#parameter}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameterVersionId">ParameterVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter_version_id DataGoogleParameterManagerRegionalParameterVersionRender#parameter_version_id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#id DataGoogleParameterManagerRegionalParameterVersionRender#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#location DataGoogleParameterManagerRegionalParameterVersionRender#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#project DataGoogleParameterManagerRegionalParameterVersionRender#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Parameter`<sup>Required</sup> <a name="Parameter" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameter"></a>

```csharp
public string Parameter { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter DataGoogleParameterManagerRegionalParameterVersionRender#parameter}.

---

##### `ParameterVersionId`<sup>Required</sup> <a name="ParameterVersionId" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.parameterVersionId"></a>

```csharp
public string ParameterVersionId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#parameter_version_id DataGoogleParameterManagerRegionalParameterVersionRender#parameter_version_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#id DataGoogleParameterManagerRegionalParameterVersionRender#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#location DataGoogleParameterManagerRegionalParameterVersionRender#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleParameterManagerRegionalParameterVersionRender.DataGoogleParameterManagerRegionalParameterVersionRenderConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/parameter_manager_regional_parameter_version_render#project DataGoogleParameterManagerRegionalParameterVersionRender#project}.

---



