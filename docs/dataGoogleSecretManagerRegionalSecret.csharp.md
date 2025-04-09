# `dataGoogleSecretManagerRegionalSecret` Submodule <a name="`dataGoogleSecretManagerRegionalSecret` Submodule" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleSecretManagerRegionalSecret <a name="DataGoogleSecretManagerRegionalSecret" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret google_secret_manager_regional_secret}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecret(Construct Scope, string Id, DataGoogleSecretManagerRegionalSecretConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig">DataGoogleSecretManagerRegionalSecretConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig">DataGoogleSecretManagerRegionalSecretConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.resetProject"></a>

```csharp
private void ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecret.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecret.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecret.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleSecretManagerRegionalSecret.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleSecretManagerRegionalSecret resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleSecretManagerRegionalSecret to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleSecretManagerRegionalSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleSecretManagerRegionalSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.annotations">Annotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.customerManagedEncryption">CustomerManagedEncryption</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveAnnotations">EffectiveAnnotations</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.expireTime">ExpireTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.labels">Labels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.rotation">Rotation</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList">DataGoogleSecretManagerRegionalSecretRotationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.topics">Topics</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList">DataGoogleSecretManagerRegionalSecretTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.ttl">Ttl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionAliases">VersionAliases</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionDestroyTtl">VersionDestroyTtl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretIdInput">SecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretId">SecretId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.annotations"></a>

```csharp
public StringMap Annotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `CustomerManagedEncryption`<sup>Required</sup> <a name="CustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.customerManagedEncryption"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList CustomerManagedEncryption { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList</a>

---

##### `EffectiveAnnotations`<sup>Required</sup> <a name="EffectiveAnnotations" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveAnnotations"></a>

```csharp
public StringMap EffectiveAnnotations { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.expireTime"></a>

```csharp
public string ExpireTime { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.labels"></a>

```csharp
public StringMap Labels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Rotation`<sup>Required</sup> <a name="Rotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.rotation"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretRotationList Rotation { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList">DataGoogleSecretManagerRegionalSecretRotationList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Topics`<sup>Required</sup> <a name="Topics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.topics"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretTopicsList Topics { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList">DataGoogleSecretManagerRegionalSecretTopicsList</a>

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.ttl"></a>

```csharp
public string Ttl { get; }
```

- *Type:* string

---

##### `VersionAliases`<sup>Required</sup> <a name="VersionAliases" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionAliases"></a>

```csharp
public StringMap VersionAliases { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `VersionDestroyTtl`<sup>Required</sup> <a name="VersionDestroyTtl" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.versionDestroyTtl"></a>

```csharp
public string VersionDestroyTtl { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecretIdInput`<sup>Optional</sup> <a name="SecretIdInput" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretIdInput"></a>

```csharp
public string SecretIdInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.secretId"></a>

```csharp
public string SecretId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecret.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleSecretManagerRegionalSecretConfig <a name="DataGoogleSecretManagerRegionalSecretConfig" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Location,
    string SecretId,
    string Id = null,
    string Project = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.location">Location</a></code> | <code>string</code> | The location of the regional secret. eg us-central1. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.secretId">SecretId</a></code> | <code>string</code> | This must be unique within the project. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the regional secret. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret#location DataGoogleSecretManagerRegionalSecret#location}

---

##### `SecretId`<sup>Required</sup> <a name="SecretId" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.secretId"></a>

```csharp
public string SecretId { get; set; }
```

- *Type:* string

This must be unique within the project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret#secret_id DataGoogleSecretManagerRegionalSecret#secret_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret#id DataGoogleSecretManagerRegionalSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/data-sources/secret_manager_regional_secret#project DataGoogleSecretManagerRegionalSecret#project}.

---

### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption {

};
```


### DataGoogleSecretManagerRegionalSecretRotation <a name="DataGoogleSecretManagerRegionalSecretRotation" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretRotation {

};
```


### DataGoogleSecretManagerRegionalSecretTopics <a name="DataGoogleSecretManagerRegionalSecretTopics" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretTopics {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference <a name="DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryptionOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption">DataGoogleSecretManagerRegionalSecretCustomerManagedEncryption</a>

---


### DataGoogleSecretManagerRegionalSecretRotationList <a name="DataGoogleSecretManagerRegionalSecretRotationList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretRotationList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretRotationOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretRotationOutputReference <a name="DataGoogleSecretManagerRegionalSecretRotationOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretRotationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime">NextRotationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod">RotationPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation">DataGoogleSecretManagerRegionalSecretRotation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `NextRotationTime`<sup>Required</sup> <a name="NextRotationTime" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.nextRotationTime"></a>

```csharp
public string NextRotationTime { get; }
```

- *Type:* string

---

##### `RotationPeriod`<sup>Required</sup> <a name="RotationPeriod" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.rotationPeriod"></a>

```csharp
public string RotationPeriod { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotationOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretRotation InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretRotation">DataGoogleSecretManagerRegionalSecretRotation</a>

---


### DataGoogleSecretManagerRegionalSecretTopicsList <a name="DataGoogleSecretManagerRegionalSecretTopicsList" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretTopicsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get"></a>

```csharp
private DataGoogleSecretManagerRegionalSecretTopicsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleSecretManagerRegionalSecretTopicsOutputReference <a name="DataGoogleSecretManagerRegionalSecretTopicsOutputReference" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleSecretManagerRegionalSecretTopicsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics">DataGoogleSecretManagerRegionalSecretTopics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopicsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleSecretManagerRegionalSecretTopics InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleSecretManagerRegionalSecret.DataGoogleSecretManagerRegionalSecretTopics">DataGoogleSecretManagerRegionalSecretTopics</a>

---



