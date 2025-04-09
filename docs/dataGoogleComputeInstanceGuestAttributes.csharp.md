# `dataGoogleComputeInstanceGuestAttributes` Submodule <a name="`dataGoogleComputeInstanceGuestAttributes` Submodule" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceGuestAttributes <a name="DataGoogleComputeInstanceGuestAttributes" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes google_compute_instance_guest_attributes}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeInstanceGuestAttributes(Construct Scope, string Id, DataGoogleComputeInstanceGuestAttributesConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig">DataGoogleComputeInstanceGuestAttributesConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig">DataGoogleComputeInstanceGuestAttributesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetQueryPath">ResetQueryPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetVariableKey">ResetVariableKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetQueryPath` <a name="ResetQueryPath" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetQueryPath"></a>

```csharp
private void ResetQueryPath()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetVariableKey` <a name="ResetVariableKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetVariableKey"></a>

```csharp
private void ResetVariableKey()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeInstanceGuestAttributes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeInstanceGuestAttributes.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeInstanceGuestAttributes.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeInstanceGuestAttributes.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleComputeInstanceGuestAttributes.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleComputeInstanceGuestAttributes resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeInstanceGuestAttributes to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeInstanceGuestAttributes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstanceGuestAttributes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryValue">QueryValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList">DataGoogleComputeInstanceGuestAttributesQueryValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableValue">VariableValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPathInput">QueryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKeyInput">VariableKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPath">QueryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKey">VariableKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `QueryValue`<sup>Required</sup> <a name="QueryValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryValue"></a>

```csharp
public DataGoogleComputeInstanceGuestAttributesQueryValueList QueryValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList">DataGoogleComputeInstanceGuestAttributesQueryValueList</a>

---

##### `VariableValue`<sup>Required</sup> <a name="VariableValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableValue"></a>

```csharp
public string VariableValue { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `QueryPathInput`<sup>Optional</sup> <a name="QueryPathInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPathInput"></a>

```csharp
public string QueryPathInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `VariableKeyInput`<sup>Optional</sup> <a name="VariableKeyInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKeyInput"></a>

```csharp
public string VariableKeyInput { get; }
```

- *Type:* string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `QueryPath`<sup>Required</sup> <a name="QueryPath" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.queryPath"></a>

```csharp
public string QueryPath { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `VariableKey`<sup>Required</sup> <a name="VariableKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.variableKey"></a>

```csharp
public string VariableKey { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributes.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceGuestAttributesConfig <a name="DataGoogleComputeInstanceGuestAttributesConfig" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeInstanceGuestAttributesConfig {
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
    string QueryPath = null,
    string Region = null,
    string VariableKey = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.queryPath">QueryPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.variableKey">VariableKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#name DataGoogleComputeInstanceGuestAttributes#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#id DataGoogleComputeInstanceGuestAttributes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#project DataGoogleComputeInstanceGuestAttributes#project}.

---

##### `QueryPath`<sup>Optional</sup> <a name="QueryPath" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.queryPath"></a>

```csharp
public string QueryPath { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#query_path DataGoogleComputeInstanceGuestAttributes#query_path}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#region DataGoogleComputeInstanceGuestAttributes#region}.

---

##### `VariableKey`<sup>Optional</sup> <a name="VariableKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.variableKey"></a>

```csharp
public string VariableKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#variable_key DataGoogleComputeInstanceGuestAttributes#variable_key}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/compute_instance_guest_attributes#zone DataGoogleComputeInstanceGuestAttributes#zone}.

---

### DataGoogleComputeInstanceGuestAttributesQueryValue <a name="DataGoogleComputeInstanceGuestAttributesQueryValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeInstanceGuestAttributesQueryValue {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceGuestAttributesQueryValueList <a name="DataGoogleComputeInstanceGuestAttributesQueryValueList" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeInstanceGuestAttributesQueryValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get"></a>

```csharp
private DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference <a name="DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue">DataGoogleComputeInstanceGuestAttributesQueryValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValueOutputReference.property.internalValue"></a>

```csharp
public DataGoogleComputeInstanceGuestAttributesQueryValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleComputeInstanceGuestAttributes.DataGoogleComputeInstanceGuestAttributesQueryValue">DataGoogleComputeInstanceGuestAttributesQueryValue</a>

---



