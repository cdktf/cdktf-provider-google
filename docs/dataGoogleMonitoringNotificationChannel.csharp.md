# `dataGoogleMonitoringNotificationChannel` Submodule <a name="`dataGoogleMonitoringNotificationChannel` Submodule" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleMonitoringNotificationChannel <a name="DataGoogleMonitoringNotificationChannel" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel google_monitoring_notification_channel}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringNotificationChannel(Construct Scope, string Id, DataGoogleMonitoringNotificationChannelConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig">DataGoogleMonitoringNotificationChannelConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig">DataGoogleMonitoringNotificationChannelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels">ResetUserLabels</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUserLabels` <a name="ResetUserLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.resetUserLabels"></a>

```csharp
private void ResetUserLabels()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringNotificationChannel.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringNotificationChannel.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringNotificationChannel.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DataGoogleMonitoringNotificationChannel.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataGoogleMonitoringNotificationChannel resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleMonitoringNotificationChannel to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleMonitoringNotificationChannel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleMonitoringNotificationChannel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled">Enabled</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete">ForceDelete</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels">SensitiveLabels</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus">VerificationStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput">UserLabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.enabled"></a>

```csharp
public IResolvable Enabled { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `ForceDelete`<sup>Required</sup> <a name="ForceDelete" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.forceDelete"></a>

```csharp
public IResolvable ForceDelete { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SensitiveLabels`<sup>Required</sup> <a name="SensitiveLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.sensitiveLabels"></a>

```csharp
public DataGoogleMonitoringNotificationChannelSensitiveLabelsList SensitiveLabels { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList">DataGoogleMonitoringNotificationChannelSensitiveLabelsList</a>

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.verificationStatus"></a>

```csharp
public string VerificationStatus { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UserLabelsInput`<sup>Optional</sup> <a name="UserLabelsInput" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UserLabels`<sup>Required</sup> <a name="UserLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannel.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleMonitoringNotificationChannelConfig <a name="DataGoogleMonitoringNotificationChannelConfig" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringNotificationChannelConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    string Type = null,
    System.Collections.Generic.IDictionary<string, string> UserLabels = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName">DisplayName</a></code> | <code>string</code> | An optional human-readable name for this notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Configuration fields that define the channel and its behavior. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type">Type</a></code> | <code>string</code> | The type of the notification channel. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels">UserLabels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

An optional human-readable name for this notification channel.

It is recommended that you specify a non-empty and unique name in order to make it easier to identify the channels in your project, though this is not enforced. The display name is limited to 512 Unicode characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#display_name DataGoogleMonitoringNotificationChannel#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#id DataGoogleMonitoringNotificationChannel#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Configuration fields that define the channel and its behavior.

The
permissible and required labels are specified in the
NotificationChannelDescriptor corresponding to the type field.

Labels with sensitive data are obfuscated by the API and therefore Terraform cannot
determine if there are upstream changes to these fields. They can also be configured via
the sensitive_labels block, but cannot be configured in both places.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#labels DataGoogleMonitoringNotificationChannel#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#project DataGoogleMonitoringNotificationChannel#project}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of the notification channel.

This field matches the value of the NotificationChannelDescriptor.type field. See https://cloud.google.com/monitoring/api/ref_v3/rest/v3/projects.notificationChannelDescriptors/list to get the list of valid values such as "email", "slack", etc...

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#type DataGoogleMonitoringNotificationChannel#type}

---

##### `UserLabels`<sup>Optional</sup> <a name="UserLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelConfig.property.userLabels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> UserLabels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

User-supplied key/value data that does not need to conform to the corresponding NotificationChannelDescriptor's schema, unlike the labels field.

This field is intended to be used for organizing and identifying the NotificationChannel objects.The field can contain up to 64 entries. Each key and value is limited to 63 Unicode characters or 128 bytes, whichever is smaller. Labels and values can contain only lowercase letters, numerals, underscores, and dashes. Keys must begin with a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.41.0/docs/data-sources/monitoring_notification_channel#user_labels DataGoogleMonitoringNotificationChannel#user_labels}

---

### DataGoogleMonitoringNotificationChannelSensitiveLabels <a name="DataGoogleMonitoringNotificationChannelSensitiveLabels" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringNotificationChannelSensitiveLabels {

};
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleMonitoringNotificationChannelSensitiveLabelsList <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsList" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringNotificationChannelSensitiveLabelsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get"></a>

```csharp
private DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference <a name="DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken">AuthToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey">ServiceKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AuthToken`<sup>Required</sup> <a name="AuthToken" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.authToken"></a>

```csharp
public string AuthToken { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `ServiceKey`<sup>Required</sup> <a name="ServiceKey" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.serviceKey"></a>

```csharp
public string ServiceKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabelsOutputReference.property.internalValue"></a>

```csharp
public DataGoogleMonitoringNotificationChannelSensitiveLabels InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dataGoogleMonitoringNotificationChannel.DataGoogleMonitoringNotificationChannelSensitiveLabels">DataGoogleMonitoringNotificationChannelSensitiveLabels</a>

---



