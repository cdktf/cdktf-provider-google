# `dataGoogleBackupDrManagementServer` Submodule <a name="`dataGoogleBackupDrManagementServer` Submodule" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleBackupDrManagementServer <a name="DataGoogleBackupDrManagementServer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/backup_dr_management_server google_backup_dr_management_server}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServer(Construct Scope, string Id, DataGoogleBackupDrManagementServerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig">DataGoogleBackupDrManagementServerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig">DataGoogleBackupDrManagementServerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBackupDrManagementServer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBackupDrManagementServer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBackupDrManagementServer.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleBackupDrManagementServer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleBackupDrManagementServer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleBackupDrManagementServer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleBackupDrManagementServer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/backup_dr_management_server#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleBackupDrManagementServer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.managementUri">ManagementUri</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList">DataGoogleBackupDrManagementServerManagementUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.networks">Networks</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList">DataGoogleBackupDrManagementServerNetworksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.oauth2ClientId">Oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.location">Location</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `ManagementUri`<sup>Required</sup> <a name="ManagementUri" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.managementUri"></a>

```csharp
public DataGoogleBackupDrManagementServerManagementUriList ManagementUri { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList">DataGoogleBackupDrManagementServerManagementUriList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Networks`<sup>Required</sup> <a name="Networks" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.networks"></a>

```csharp
public DataGoogleBackupDrManagementServerNetworksList Networks { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList">DataGoogleBackupDrManagementServerNetworksList</a>

---

##### `Oauth2ClientId`<sup>Required</sup> <a name="Oauth2ClientId" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.oauth2ClientId"></a>

```csharp
public string Oauth2ClientId { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleBackupDrManagementServerConfig <a name="DataGoogleBackupDrManagementServerConfig" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.location">Location</a></code> | <code>string</code> | The location for the management server (management console). |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location for the management server (management console).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/backup_dr_management_server#location DataGoogleBackupDrManagementServer#location}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/data-sources/backup_dr_management_server#id DataGoogleBackupDrManagementServer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleBackupDrManagementServerManagementUri <a name="DataGoogleBackupDrManagementServerManagementUri" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServerManagementUri {

};
```


### DataGoogleBackupDrManagementServerNetworks <a name="DataGoogleBackupDrManagementServerNetworks" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServerNetworks {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleBackupDrManagementServerManagementUriList <a name="DataGoogleBackupDrManagementServerManagementUriList" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServerManagementUriList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get"></a>

```csharp
private DataGoogleBackupDrManagementServerManagementUriOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrManagementServerManagementUriOutputReference <a name="DataGoogleBackupDrManagementServerManagementUriOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServerManagementUriOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.api">Api</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.webUi">WebUi</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri">DataGoogleBackupDrManagementServerManagementUri</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.api"></a>

```csharp
public string Api { get; }
```

- *Type:* string

---

##### `WebUi`<sup>Required</sup> <a name="WebUi" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.webUi"></a>

```csharp
public string WebUi { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUriOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrManagementServerManagementUri InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerManagementUri">DataGoogleBackupDrManagementServerManagementUri</a>

---


### DataGoogleBackupDrManagementServerNetworksList <a name="DataGoogleBackupDrManagementServerNetworksList" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServerNetworksList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get"></a>

```csharp
private DataGoogleBackupDrManagementServerNetworksOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleBackupDrManagementServerNetworksOutputReference <a name="DataGoogleBackupDrManagementServerNetworksOutputReference" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleBackupDrManagementServerNetworksOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.network">Network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode">PeeringMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks">DataGoogleBackupDrManagementServerNetworks</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.network"></a>

```csharp
public string Network { get; }
```

- *Type:* string

---

##### `PeeringMode`<sup>Required</sup> <a name="PeeringMode" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.peeringMode"></a>

```csharp
public string PeeringMode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworksOutputReference.property.internalValue"></a>

```csharp
public DataGoogleBackupDrManagementServerNetworks InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleBackupDrManagementServer.DataGoogleBackupDrManagementServerNetworks">DataGoogleBackupDrManagementServerNetworks</a>

---



