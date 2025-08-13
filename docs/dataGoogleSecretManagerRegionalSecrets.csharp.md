# `dataGoogleSecretManagerRegionalSecrets` Submodule <a name="`dataGoogleSecretManagerRegionalSecrets` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecrets <a name="DataGoogleSecretManagerRegionalSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets google_secret_manager_regional_secrets}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecrets(Construct Scope, string Id, DataGoogleSecretManagerRegionalSecretsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig">DataGoogleSecretManagerRegionalSecretsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig">DataGoogleSecretManagerRegionalSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetFilter"></a>

```csharp
private void ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecrets resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecrets.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecrets.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecrets.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecrets.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecrets resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecrets to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecretManagerRegionalSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.secrets">Secrets</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList">DataGoogleSecretManagerRegionalSecretsSecretsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filterInput">FilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filter">Filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Secrets`<sup>Required</sup> <a name="Secrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.secrets"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecretsList Secrets { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList">DataGoogleSecretManagerRegionalSecretsSecretsList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filterInput"></a>

```csharp
public string FilterInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.filter"></a>

```csharp
public string Filter { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecrets.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretsConfig <a name="DataGoogleSecretManagerRegionalSecretsConfig" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsConfig {
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
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.location">Location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.filter">Filter</a></code> | <code>string</code> | Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#location DataGoogleSecretManagerRegionalSecrets#location}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.filter"></a>

```csharp
public string Filter { get; set; }
```

- *Type:* string

Filter string, adhering to the rules in List-operation filtering (https://cloud.google.com/secret-manager/docs/filtering). List only secrets matching the filter. If filter is empty, all regional secrets are listed from the specified location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#filter DataGoogleSecretManagerRegionalSecrets#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#id DataGoogleSecretManagerRegionalSecrets#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/data-sources/secret_manager_regional_secrets#project DataGoogleSecretManagerRegionalSecrets#project}.

---

### DataGoogleSecretManagerRegionalSecretsSecrets <a name="DataGoogleSecretManagerRegionalSecretsSecrets" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecrets {

};
```


### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption {

};
```


### DataGoogleSecretManagerRegionalSecretsSecretsRotation <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsRotation {

};
```


### DataGoogleSecretManagerRegionalSecretsSecretsTopics <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsTopics {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsList <a name="DataGoogleSecretManagerRegionalSecretsSecretsList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretsSecretsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretsSecretsOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.annotations">Annotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.deletionProtection">DeletionProtection</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList">DataGoogleSecretManagerRegionalSecretsSecretsRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.tags">Tags</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList">DataGoogleSecretManagerRegionalSecretsSecretsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionAliases">VersionAliases</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets">DataGoogleSecretManagerRegionalSecretsSecrets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.annotations"></a>

```csharp
public StringMap Annotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.customerManagedEncryption"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretsSecretsCustomerManagedEncryptionList</a>

---

##### `DeletionProtection`<sup>Required</sup> <a name="DeletionProtection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.deletionProtection"></a>

```csharp
public IResolvable DeletionProtection { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.rotation"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecretsRotationList Rotation { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList">DataGoogleSecretManagerRegionalSecretsSecretsRotationList</a>

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.tags"></a>

```csharp
public StringMap Tags { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.topics"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecretsTopicsList Topics { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList">DataGoogleSecretManagerRegionalSecretsSecretsTopicsList</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionAliases"></a>

```csharp
public StringMap VersionAliases { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `VersionDestroyTtl`<sup>Required</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.versionDestroyTtl"></a>

```csharp
public string VersionDestroyTtl { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecrets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecrets">DataGoogleSecretManagerRegionalSecretsSecrets</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsRotationList <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsRotationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation">DataGoogleSecretManagerRegionalSecretsSecretsRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecretsRotation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsRotation">DataGoogleSecretManagerRegionalSecretsSecretsRotation</a>

---


### DataGoogleSecretManagerRegionalSecretsSecretsTopicsList <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsTopicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference <a name="DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics">DataGoogleSecretManagerRegionalSecretsSecretsTopics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopicsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretsSecretsTopics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecrets.DataGoogleSecretManagerRegionalSecretsSecretsTopics">DataGoogleSecretManagerRegionalSecretsSecretsTopics</a>

---



