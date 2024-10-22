# `dataGoogleCertificateManagerCertificateMap` Submodule <a name="`dataGoogleCertificateManagerCertificateMap` Submodule" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCertificateManagerCertificateMap <a name="DataGoogleCertificateManagerCertificateMap" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/certificate_manager_certificate_map google_certificate_manager_certificate_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMap(Construct Scope, string Id, DataGoogleCertificateManagerCertificateMapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig">DataGoogleCertificateManagerCertificateMapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig">DataGoogleCertificateManagerCertificateMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleCertificateManagerCertificateMap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCertificateManagerCertificateMap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCertificateManagerCertificateMap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCertificateManagerCertificateMap.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleCertificateManagerCertificateMap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleCertificateManagerCertificateMap resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleCertificateManagerCertificateMap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleCertificateManagerCertificateMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/certificate_manager_certificate_map#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleCertificateManagerCertificateMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.gclbTargets">GclbTargets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList">DataGoogleCertificateManagerCertificateMapGclbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GclbTargets`<sup>Required</sup> <a name="GclbTargets" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.gclbTargets"></a>

```csharp
public DataGoogleCertificateManagerCertificateMapGclbTargetsList GclbTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList">DataGoogleCertificateManagerCertificateMapGclbTargetsList</a>

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCertificateManagerCertificateMapConfig <a name="DataGoogleCertificateManagerCertificateMapConfig" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMapConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the Certificate Map. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/certificate_manager_certificate_map#id DataGoogleCertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/certificate_manager_certificate_map#project DataGoogleCertificateManagerCertificateMap#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the Certificate Map.

Certificate Map names must be unique
globally and match the pattern 'projects/* /locations/* /certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/certificate_manager_certificate_map#name DataGoogleCertificateManagerCertificateMap#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/certificate_manager_certificate_map#id DataGoogleCertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/data-sources/certificate_manager_certificate_map#project DataGoogleCertificateManagerCertificateMap#project}.

---

### DataGoogleCertificateManagerCertificateMapGclbTargets <a name="DataGoogleCertificateManagerCertificateMapGclbTargets" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMapGclbTargets {

};
```


### DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get"></a>

```csharp
private DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a>

---


### DataGoogleCertificateManagerCertificateMapGclbTargetsList <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsList" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMapGclbTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.get"></a>

```csharp
private DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference <a name="DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs">IpConfigs</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy">TargetHttpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy">TargetSslProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets">DataGoogleCertificateManagerCertificateMapGclbTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpConfigs`<sup>Required</sup> <a name="IpConfigs" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs"></a>

```csharp
public DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList IpConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">DataGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a>

---

##### `TargetHttpsProxy`<sup>Required</sup> <a name="TargetHttpsProxy" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy"></a>

```csharp
public string TargetHttpsProxy { get; }
```

- *Type:* string

---

##### `TargetSslProxy`<sup>Required</sup> <a name="TargetSslProxy" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy"></a>

```csharp
public string TargetSslProxy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleCertificateManagerCertificateMapGclbTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleCertificateManagerCertificateMap.DataGoogleCertificateManagerCertificateMapGclbTargets">DataGoogleCertificateManagerCertificateMapGclbTargets</a>

---



