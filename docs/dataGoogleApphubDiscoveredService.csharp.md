# `dataGoogleApphubDiscoveredService` Submodule <a name="`dataGoogleApphubDiscoveredService` Submodule" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApphubDiscoveredService <a name="DataGoogleApphubDiscoveredService" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service google_apphub_discovered_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredService(Construct Scope, string Id, DataGoogleApphubDiscoveredServiceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig">DataGoogleApphubDiscoveredServiceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig">DataGoogleApphubDiscoveredServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApphubDiscoveredService resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredService.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredService.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredService.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleApphubDiscoveredService.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleApphubDiscoveredService resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleApphubDiscoveredService to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleApphubDiscoveredService that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApphubDiscoveredService to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceProperties">ServiceProperties</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList">DataGoogleApphubDiscoveredServiceServicePropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceReference">ServiceReference</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList">DataGoogleApphubDiscoveredServiceServiceReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUriInput">ServiceUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUri">ServiceUri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceProperties`<sup>Required</sup> <a name="ServiceProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceProperties"></a>

```csharp
public DataGoogleApphubDiscoveredServiceServicePropertiesList ServiceProperties { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList">DataGoogleApphubDiscoveredServiceServicePropertiesList</a>

---

##### `ServiceReference`<sup>Required</sup> <a name="ServiceReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceReference"></a>

```csharp
public DataGoogleApphubDiscoveredServiceServiceReferenceList ServiceReference { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList">DataGoogleApphubDiscoveredServiceServiceReferenceList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ServiceUriInput`<sup>Optional</sup> <a name="ServiceUriInput" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUriInput"></a>

```csharp
public string ServiceUriInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.serviceUri"></a>

```csharp
public string ServiceUri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredService.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApphubDiscoveredServiceConfig <a name="DataGoogleApphubDiscoveredServiceConfig" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredServiceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string ServiceUri,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#location DataGoogleApphubDiscoveredService#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.serviceUri">ServiceUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#service_uri DataGoogleApphubDiscoveredService#service_uri}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#id DataGoogleApphubDiscoveredService#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#project DataGoogleApphubDiscoveredService#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#location DataGoogleApphubDiscoveredService#location}.

---

##### `ServiceUri`<sup>Required</sup> <a name="ServiceUri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.serviceUri"></a>

```csharp
public string ServiceUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#service_uri DataGoogleApphubDiscoveredService#service_uri}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#id DataGoogleApphubDiscoveredService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/data-sources/apphub_discovered_service#project DataGoogleApphubDiscoveredService#project}.

---

### DataGoogleApphubDiscoveredServiceServiceProperties <a name="DataGoogleApphubDiscoveredServiceServiceProperties" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredServiceServiceProperties {

};
```


### DataGoogleApphubDiscoveredServiceServiceReference <a name="DataGoogleApphubDiscoveredServiceServiceReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredServiceServiceReference {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleApphubDiscoveredServiceServicePropertiesList <a name="DataGoogleApphubDiscoveredServiceServicePropertiesList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredServiceServicePropertiesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.get"></a>

```csharp
private DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference <a name="DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.gcpProject">GcpProject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties">DataGoogleApphubDiscoveredServiceServiceProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GcpProject`<sup>Required</sup> <a name="GcpProject" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.gcpProject"></a>

```csharp
public string GcpProject { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServicePropertiesOutputReference.property.internalValue"></a>

```csharp
public DataGoogleApphubDiscoveredServiceServiceProperties InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceProperties">DataGoogleApphubDiscoveredServiceServiceProperties</a>

---


### DataGoogleApphubDiscoveredServiceServiceReferenceList <a name="DataGoogleApphubDiscoveredServiceServiceReferenceList" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredServiceServiceReferenceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.get"></a>

```csharp
private DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference <a name="DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference">DataGoogleApphubDiscoveredServiceServiceReference</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReferenceOutputReference.property.internalValue"></a>

```csharp
public DataGoogleApphubDiscoveredServiceServiceReference InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleApphubDiscoveredService.DataGoogleApphubDiscoveredServiceServiceReference">DataGoogleApphubDiscoveredServiceServiceReference</a>

---



