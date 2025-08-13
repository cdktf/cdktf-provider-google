# `dataGoogleNetworkManagementConnectivityTestRun` Submodule <a name="`dataGoogleNetworkManagementConnectivityTestRun` Submodule" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleNetworkManagementConnectivityTestRun <a name="DataGoogleNetworkManagementConnectivityTestRun" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_management_connectivity_test_run google_network_management_connectivity_test_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRun(Construct Scope, string Id, DataGoogleNetworkManagementConnectivityTestRunConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig">DataGoogleNetworkManagementConnectivityTestRunConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig">DataGoogleNetworkManagementConnectivityTestRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleNetworkManagementConnectivityTestRun resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleNetworkManagementConnectivityTestRun.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleNetworkManagementConnectivityTestRun.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleNetworkManagementConnectivityTestRun.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleNetworkManagementConnectivityTestRun.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleNetworkManagementConnectivityTestRun resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleNetworkManagementConnectivityTestRun to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleNetworkManagementConnectivityTestRun that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_management_connectivity_test_run#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleNetworkManagementConnectivityTestRun to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.reachabilityDetails">ReachabilityDetails</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ReachabilityDetails`<sup>Required</sup> <a name="ReachabilityDetails" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.reachabilityDetails"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList ReachabilityDetails { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRun.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleNetworkManagementConnectivityTestRunConfig <a name="DataGoogleNetworkManagementConnectivityTestRunConfig" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunConfig {
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
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.name">Name</a></code> | <code>string</code> | Unique name for the connectivity test. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_management_connectivity_test_run#id DataGoogleNetworkManagementConnectivityTestRun#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_management_connectivity_test_run#project DataGoogleNetworkManagementConnectivityTestRun#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Unique name for the connectivity test.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_management_connectivity_test_run#name DataGoogleNetworkManagementConnectivityTestRun#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_management_connectivity_test_run#id DataGoogleNetworkManagementConnectivityTestRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/network_management_connectivity_test_run#project DataGoogleNetworkManagementConnectivityTestRun#project}.

---

### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails {

};
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces {

};
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo {

};
```


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get"></a>

```csharp
private DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.result">Result</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.traces">Traces</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.verifyTime">VerifyTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Result`<sup>Required</sup> <a name="Result" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.result"></a>

```csharp
public string Result { get; }
```

- *Type:* string

---

##### `Traces`<sup>Required</sup> <a name="Traces" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.traces"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList Traces { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList</a>

---

##### `VerifyTime`<sup>Required</sup> <a name="VerifyTime" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.verifyTime"></a>

```csharp
public string VerifyTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetails</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get"></a>

```csharp
private DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationIp">DestinationIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationNetworkUri">DestinationNetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationPort">DestinationPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceAgentUri">SourceAgentUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceIp">SourceIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceNetworkUri">SourceNetworkUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourcePort">SourcePort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationIp`<sup>Required</sup> <a name="DestinationIp" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationIp"></a>

```csharp
public string DestinationIp { get; }
```

- *Type:* string

---

##### `DestinationNetworkUri`<sup>Required</sup> <a name="DestinationNetworkUri" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationNetworkUri"></a>

```csharp
public string DestinationNetworkUri { get; }
```

- *Type:* string

---

##### `DestinationPort`<sup>Required</sup> <a name="DestinationPort" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.destinationPort"></a>

```csharp
public double DestinationPort { get; }
```

- *Type:* double

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `SourceAgentUri`<sup>Required</sup> <a name="SourceAgentUri" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceAgentUri"></a>

```csharp
public string SourceAgentUri { get; }
```

- *Type:* string

---

##### `SourceIp`<sup>Required</sup> <a name="SourceIp" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceIp"></a>

```csharp
public string SourceIp { get; }
```

- *Type:* string

---

##### `SourceNetworkUri`<sup>Required</sup> <a name="SourceNetworkUri" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourceNetworkUri"></a>

```csharp
public string SourceNetworkUri { get; }
```

- *Type:* string

---

##### `SourcePort`<sup>Required</sup> <a name="SourcePort" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.sourcePort"></a>

```csharp
public double SourcePort { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoOutputReference.property.internalValue"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfo</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get"></a>

```csharp
private DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.endpointInfo">EndpointInfo</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.forwardTraceId">ForwardTraceId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndpointInfo`<sup>Required</sup> <a name="EndpointInfo" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.endpointInfo"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList EndpointInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesEndpointInfoList</a>

---

##### `ForwardTraceId`<sup>Required</sup> <a name="ForwardTraceId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.forwardTraceId"></a>

```csharp
public double ForwardTraceId { get; }
```

- *Type:* double

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.steps"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList Steps { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTraces</a>

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get"></a>

```csharp
private DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference <a name="DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.causesDrop">CausesDrop</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.projectId">ProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CausesDrop`<sup>Required</sup> <a name="CausesDrop" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.causesDrop"></a>

```csharp
public IResolvable CausesDrop { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.projectId"></a>

```csharp
public string ProjectId { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesStepsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleNetworkManagementConnectivityTestRun.DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps">DataGoogleNetworkManagementConnectivityTestRunReachabilityDetailsTracesSteps</a>

---



