# `google_logging_folder_bucket_config`

Refer to the Terraform Registory for docs: [`google_logging_folder_bucket_config`](https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config).

# `loggingFolderBucketConfig` Submodule <a name="`loggingFolderBucketConfig` Submodule" id="@cdktf/provider-google.loggingFolderBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingFolderBucketConfig <a name="LoggingFolderBucketConfig" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config google_logging_folder_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderBucketConfig(Construct Scope, string Id, LoggingFolderBucketConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig">LoggingFolderBucketConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig">LoggingFolderBucketConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings">PutCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetCmekSettings">ResetCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetRetentionDays">ResetRetentionDays</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutCmekSettings` <a name="PutCmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings"></a>

```csharp
private void PutCmekSettings(LoggingFolderBucketConfigCmekSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.putCmekSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---

##### `ResetCmekSettings` <a name="ResetCmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetCmekSettings"></a>

```csharp
private void ResetCmekSettings()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetRetentionDays` <a name="ResetRetentionDays" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.resetRetentionDays"></a>

```csharp
private void ResetRetentionDays()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingFolderBucketConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingFolderBucketConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

LoggingFolderBucketConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference">LoggingFolderBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycleState">LifecycleState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketIdInput">BucketIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettingsInput">CmekSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folderInput">FolderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDaysInput">RetentionDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketId">BucketId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folder">Folder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDays">RetentionDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CmekSettings`<sup>Required</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettings"></a>

```csharp
public LoggingFolderBucketConfigCmekSettingsOutputReference CmekSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference">LoggingFolderBucketConfigCmekSettingsOutputReference</a>

---

##### `LifecycleState`<sup>Required</sup> <a name="LifecycleState" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.lifecycleState"></a>

```csharp
public string LifecycleState { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `BucketIdInput`<sup>Optional</sup> <a name="BucketIdInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketIdInput"></a>

```csharp
public string BucketIdInput { get; }
```

- *Type:* string

---

##### `CmekSettingsInput`<sup>Optional</sup> <a name="CmekSettingsInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.cmekSettingsInput"></a>

```csharp
public LoggingFolderBucketConfigCmekSettings CmekSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `FolderInput`<sup>Optional</sup> <a name="FolderInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folderInput"></a>

```csharp
public string FolderInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `RetentionDaysInput`<sup>Optional</sup> <a name="RetentionDaysInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDaysInput"></a>

```csharp
public double RetentionDaysInput { get; }
```

- *Type:* double

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.bucketId"></a>

```csharp
public string BucketId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.folder"></a>

```csharp
public string Folder { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `RetentionDays`<sup>Required</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.retentionDays"></a>

```csharp
public double RetentionDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingFolderBucketConfigCmekSettings <a name="LoggingFolderBucketConfigCmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderBucketConfigCmekSettings {
    string KmsKeyName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | The resource name for the configured Cloud KMS key. |

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; set; }
```

- *Type:* string

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#kms_key_name LoggingFolderBucketConfig#kms_key_name}

---

### LoggingFolderBucketConfigConfig <a name="LoggingFolderBucketConfigConfig" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderBucketConfigConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BucketId,
    string Folder,
    string Location,
    LoggingFolderBucketConfigCmekSettings CmekSettings = null,
    string Description = null,
    string Id = null,
    double RetentionDays = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.bucketId">BucketId</a></code> | <code>string</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.folder">Folder</a></code> | <code>string</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.cmekSettings">CmekSettings</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.description">Description</a></code> | <code>string</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#id LoggingFolderBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.retentionDays">RetentionDays</a></code> | <code>double</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BucketId`<sup>Required</sup> <a name="BucketId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.bucketId"></a>

```csharp
public string BucketId { get; set; }
```

- *Type:* string

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#bucket_id LoggingFolderBucketConfig#bucket_id}

---

##### `Folder`<sup>Required</sup> <a name="Folder" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.folder"></a>

```csharp
public string Folder { get; set; }
```

- *Type:* string

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#folder LoggingFolderBucketConfig#folder}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#location LoggingFolderBucketConfig#location}

---

##### `CmekSettings`<sup>Optional</sup> <a name="CmekSettings" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.cmekSettings"></a>

```csharp
public LoggingFolderBucketConfigCmekSettings CmekSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#cmek_settings LoggingFolderBucketConfig#cmek_settings}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

An optional description for this bucket.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#description LoggingFolderBucketConfig#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#id LoggingFolderBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `RetentionDays`<sup>Optional</sup> <a name="RetentionDays" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigConfig.property.retentionDays"></a>

```csharp
public double RetentionDays { get; set; }
```

- *Type:* double

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/logging_folder_bucket_config#retention_days LoggingFolderBucketConfig#retention_days}

---

## Classes <a name="Classes" id="Classes"></a>

### LoggingFolderBucketConfigCmekSettingsOutputReference <a name="LoggingFolderBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new LoggingFolderBucketConfigCmekSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">KmsKeyVersionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId">ServiceAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">KmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName">KmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KmsKeyVersionName`<sup>Required</sup> <a name="KmsKeyVersionName" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```csharp
public string KmsKeyVersionName { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceAccountId`<sup>Required</sup> <a name="ServiceAccountId" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```csharp
public string ServiceAccountId { get; }
```

- *Type:* string

---

##### `KmsKeyNameInput`<sup>Optional</sup> <a name="KmsKeyNameInput" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```csharp
public string KmsKeyNameInput { get; }
```

- *Type:* string

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```csharp
public string KmsKeyName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```csharp
public LoggingFolderBucketConfigCmekSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.loggingFolderBucketConfig.LoggingFolderBucketConfigCmekSettings">LoggingFolderBucketConfigCmekSettings</a>

---



