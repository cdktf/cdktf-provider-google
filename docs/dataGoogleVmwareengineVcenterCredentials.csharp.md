# `dataGoogleVmwareengineVcenterCredentials` Submodule <a name="`dataGoogleVmwareengineVcenterCredentials` Submodule" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleVmwareengineVcenterCredentials <a name="DataGoogleVmwareengineVcenterCredentials" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials google_vmwareengine_vcenter_credentials}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleVmwareengineVcenterCredentials(Construct Scope, string Id, DataGoogleVmwareengineVcenterCredentialsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig">DataGoogleVmwareengineVcenterCredentialsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig">DataGoogleVmwareengineVcenterCredentialsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleVmwareengineVcenterCredentials resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineVcenterCredentials.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineVcenterCredentials.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineVcenterCredentials.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleVmwareengineVcenterCredentials.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleVmwareengineVcenterCredentials resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleVmwareengineVcenterCredentials to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleVmwareengineVcenterCredentials that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleVmwareengineVcenterCredentials to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.parent">Parent</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentials.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleVmwareengineVcenterCredentialsConfig <a name="DataGoogleVmwareengineVcenterCredentialsConfig" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleVmwareengineVcenterCredentialsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Parent,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.parent">Parent</a></code> | <code>string</code> | The resource name of the private cloud which contains vcenter. |
| <code><a href="#@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials#id DataGoogleVmwareengineVcenterCredentials#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The resource name of the private cloud which contains vcenter.

Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names.
For example: projects/my-project/locations/us-west1-a/privateClouds/my-cloud

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials#parent DataGoogleVmwareengineVcenterCredentials#parent}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleVmwareengineVcenterCredentials.DataGoogleVmwareengineVcenterCredentialsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/data-sources/vmwareengine_vcenter_credentials#id DataGoogleVmwareengineVcenterCredentials#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



