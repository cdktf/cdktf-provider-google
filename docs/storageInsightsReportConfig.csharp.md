# `storageInsightsReportConfig` Submodule <a name="`storageInsightsReportConfig` Submodule" id="@cdktf/provider-google.storageInsightsReportConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageInsightsReportConfig <a name="StorageInsightsReportConfig" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config google_storage_insights_report_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfig(Construct Scope, string Id, StorageInsightsReportConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig">StorageInsightsReportConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig">StorageInsightsReportConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions">PutFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions">PutObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetFrequencyOptions">ResetFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetObjectMetadataReportOptions">ResetObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions"></a>

```csharp
private void PutCsvOptions(StorageInsightsReportConfigCsvOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---

##### `PutFrequencyOptions` <a name="PutFrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions"></a>

```csharp
private void PutFrequencyOptions(StorageInsightsReportConfigFrequencyOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putFrequencyOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---

##### `PutObjectMetadataReportOptions` <a name="PutObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions"></a>

```csharp
private void PutObjectMetadataReportOptions(StorageInsightsReportConfigObjectMetadataReportOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putObjectMetadataReportOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(StorageInsightsReportConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetFrequencyOptions` <a name="ResetFrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetFrequencyOptions"></a>

```csharp
private void ResetFrequencyOptions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetObjectMetadataReportOptions` <a name="ResetObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetObjectMetadataReportOptions"></a>

```csharp
private void ResetObjectMetadataReportOptions()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageInsightsReportConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsReportConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsReportConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsReportConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

StorageInsightsReportConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageInsightsReportConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageInsightsReportConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageInsightsReportConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageInsightsReportConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference">StorageInsightsReportConfigCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptions">FrequencyOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference">StorageInsightsReportConfigFrequencyOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptions">ObjectMetadataReportOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference">StorageInsightsReportConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptionsInput">FrequencyOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptionsInput">ObjectMetadataReportOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptions"></a>

```csharp
public StorageInsightsReportConfigCsvOptionsOutputReference CsvOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference">StorageInsightsReportConfigCsvOptionsOutputReference</a>

---

##### `FrequencyOptions`<sup>Required</sup> <a name="FrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptions"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsOutputReference FrequencyOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference">StorageInsightsReportConfigFrequencyOptionsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ObjectMetadataReportOptions`<sup>Required</sup> <a name="ObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptions"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference ObjectMetadataReportOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeouts"></a>

```csharp
public StorageInsightsReportConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference">StorageInsightsReportConfigTimeoutsOutputReference</a>

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.csvOptionsInput"></a>

```csharp
public StorageInsightsReportConfigCsvOptions CsvOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `FrequencyOptionsInput`<sup>Optional</sup> <a name="FrequencyOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.frequencyOptionsInput"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptions FrequencyOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ObjectMetadataReportOptionsInput`<sup>Optional</sup> <a name="ObjectMetadataReportOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.objectMetadataReportOptionsInput"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptions ObjectMetadataReportOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageInsightsReportConfigConfig <a name="StorageInsightsReportConfigConfig" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    StorageInsightsReportConfigCsvOptions CsvOptions,
    string Location,
    string DisplayName = null,
    StorageInsightsReportConfigFrequencyOptions FrequencyOptions = null,
    string Id = null,
    StorageInsightsReportConfigObjectMetadataReportOptions ObjectMetadataReportOptions = null,
    string Project = null,
    StorageInsightsReportConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.location">Location</a></code> | <code>string</code> | The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.frequencyOptions">FrequencyOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | frequency_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#id StorageInsightsReportConfig#id}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.objectMetadataReportOptions">ObjectMetadataReportOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | object_metadata_report_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#project StorageInsightsReportConfig#project}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.csvOptions"></a>

```csharp
public StorageInsightsReportConfigCsvOptions CsvOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#csv_options StorageInsightsReportConfig#csv_options}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the ReportConfig. The source and destination buckets specified in the ReportConfig must be in the same location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#location StorageInsightsReportConfig#location}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The editable display name of the inventory report configuration. Has a limit of 256 characters. Can be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#display_name StorageInsightsReportConfig#display_name}

---

##### `FrequencyOptions`<sup>Optional</sup> <a name="FrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.frequencyOptions"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptions FrequencyOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

frequency_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#frequency_options StorageInsightsReportConfig#frequency_options}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#id StorageInsightsReportConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ObjectMetadataReportOptions`<sup>Optional</sup> <a name="ObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.objectMetadataReportOptions"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptions ObjectMetadataReportOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

object_metadata_report_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#object_metadata_report_options StorageInsightsReportConfig#object_metadata_report_options}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#project StorageInsightsReportConfig#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigConfig.property.timeouts"></a>

```csharp
public StorageInsightsReportConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts">StorageInsightsReportConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#timeouts StorageInsightsReportConfig#timeouts}

---

### StorageInsightsReportConfigCsvOptions <a name="StorageInsightsReportConfigCsvOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigCsvOptions {
    string Delimiter = null,
    object HeaderRequired = null,
    string RecordSeparator = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.delimiter">Delimiter</a></code> | <code>string</code> | The delimiter used to separate the fields in the inventory report CSV file. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.headerRequired">HeaderRequired</a></code> | <code>object</code> | The boolean that indicates whether or not headers are included in the inventory report CSV file. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.recordSeparator">RecordSeparator</a></code> | <code>string</code> | The character used to separate the records in the inventory report CSV file. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.delimiter"></a>

```csharp
public string Delimiter { get; set; }
```

- *Type:* string

The delimiter used to separate the fields in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#delimiter StorageInsightsReportConfig#delimiter}

---

##### `HeaderRequired`<sup>Optional</sup> <a name="HeaderRequired" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.headerRequired"></a>

```csharp
public object HeaderRequired { get; set; }
```

- *Type:* object

The boolean that indicates whether or not headers are included in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#header_required StorageInsightsReportConfig#header_required}

---

##### `RecordSeparator`<sup>Optional</sup> <a name="RecordSeparator" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions.property.recordSeparator"></a>

```csharp
public string RecordSeparator { get; set; }
```

- *Type:* string

The character used to separate the records in the inventory report CSV file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#record_separator StorageInsightsReportConfig#record_separator}

---

### StorageInsightsReportConfigFrequencyOptions <a name="StorageInsightsReportConfigFrequencyOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigFrequencyOptions {
    StorageInsightsReportConfigFrequencyOptionsEndDate EndDate,
    string Frequency,
    StorageInsightsReportConfigFrequencyOptionsStartDate StartDate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | end_date block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.frequency">Frequency</a></code> | <code>string</code> | The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"]. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | start_date block. |

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.endDate"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsEndDate EndDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

end_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#end_date StorageInsightsReportConfig#end_date}

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.frequency"></a>

```csharp
public string Frequency { get; set; }
```

- *Type:* string

The frequency in which inventory reports are generated. Values are DAILY or WEEKLY. Possible values: ["DAILY", "WEEKLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#frequency StorageInsightsReportConfig#frequency}

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions.property.startDate"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsStartDate StartDate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

start_date block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#start_date StorageInsightsReportConfig#start_date}

---

### StorageInsightsReportConfigFrequencyOptionsEndDate <a name="StorageInsightsReportConfigFrequencyOptionsEndDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigFrequencyOptionsEndDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.day">Day</a></code> | <code>double</code> | The day of the month to stop generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.month">Month</a></code> | <code>double</code> | The month to stop generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.year">Year</a></code> | <code>double</code> | The year to stop generating inventory reports. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

The day of the month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

The month to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

The year to stop generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}

---

### StorageInsightsReportConfigFrequencyOptionsStartDate <a name="StorageInsightsReportConfigFrequencyOptionsStartDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigFrequencyOptionsStartDate {
    double Day,
    double Month,
    double Year
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.day">Day</a></code> | <code>double</code> | The day of the month to start generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.month">Month</a></code> | <code>double</code> | The month to start generating inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.year">Year</a></code> | <code>double</code> | The year to start generating inventory reports. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.day"></a>

```csharp
public double Day { get; set; }
```

- *Type:* double

The day of the month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#day StorageInsightsReportConfig#day}

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.month"></a>

```csharp
public double Month { get; set; }
```

- *Type:* double

The month to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#month StorageInsightsReportConfig#month}

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate.property.year"></a>

```csharp
public double Year { get; set; }
```

- *Type:* double

The year to start generating inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#year StorageInsightsReportConfig#year}

---

### StorageInsightsReportConfigObjectMetadataReportOptions <a name="StorageInsightsReportConfigObjectMetadataReportOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigObjectMetadataReportOptions {
    string[] MetadataFields,
    StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions StorageDestinationOptions,
    StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters StorageFilters = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | The metadata fields included in an inventory report. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions">StorageDestinationOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | storage_destination_options block. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters">StorageFilters</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | storage_filters block. |

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; set; }
```

- *Type:* string[]

The metadata fields included in an inventory report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#metadata_fields StorageInsightsReportConfig#metadata_fields}

---

##### `StorageDestinationOptions`<sup>Required</sup> <a name="StorageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageDestinationOptions"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions StorageDestinationOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

storage_destination_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#storage_destination_options StorageInsightsReportConfig#storage_destination_options}

---

##### `StorageFilters`<sup>Optional</sup> <a name="StorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions.property.storageFilters"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters StorageFilters { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

storage_filters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#storage_filters StorageInsightsReportConfig#storage_filters}

---

### StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions {
    string Bucket,
    string DestinationPath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket">Bucket</a></code> | <code>string</code> | The destination bucket that stores the generated inventory reports. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath">DestinationPath</a></code> | <code>string</code> | The path within the destination bucket to store generated inventory reports. |

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The destination bucket that stores the generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}

---

##### `DestinationPath`<sup>Optional</sup> <a name="DestinationPath" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions.property.destinationPath"></a>

```csharp
public string DestinationPath { get; set; }
```

- *Type:* string

The path within the destination bucket to store generated inventory reports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#destination_path StorageInsightsReportConfig#destination_path}

---

### StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters {
    string Bucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket">Bucket</a></code> | <code>string</code> | The filter to use when specifying which bucket to generate inventory reports for. |

---

##### `Bucket`<sup>Optional</sup> <a name="Bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

The filter to use when specifying which bucket to generate inventory reports for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#bucket StorageInsightsReportConfig#bucket}

---

### StorageInsightsReportConfigTimeouts <a name="StorageInsightsReportConfigTimeouts" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#create StorageInsightsReportConfig#create}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#delete StorageInsightsReportConfig#delete}. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#update StorageInsightsReportConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#create StorageInsightsReportConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#delete StorageInsightsReportConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.9.0/docs/resources/storage_insights_report_config#update StorageInsightsReportConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StorageInsightsReportConfigCsvOptionsOutputReference <a name="StorageInsightsReportConfigCsvOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigCsvOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired">ResetHeaderRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator">ResetRecordSeparator</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetDelimiter"></a>

```csharp
private void ResetDelimiter()
```

##### `ResetHeaderRequired` <a name="ResetHeaderRequired" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetHeaderRequired"></a>

```csharp
private void ResetHeaderRequired()
```

##### `ResetRecordSeparator` <a name="ResetRecordSeparator" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.resetRecordSeparator"></a>

```csharp
private void ResetRecordSeparator()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput">HeaderRequiredInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput">RecordSeparatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter">Delimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired">HeaderRequired</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator">RecordSeparator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiterInput"></a>

```csharp
public string DelimiterInput { get; }
```

- *Type:* string

---

##### `HeaderRequiredInput`<sup>Optional</sup> <a name="HeaderRequiredInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequiredInput"></a>

```csharp
public object HeaderRequiredInput { get; }
```

- *Type:* object

---

##### `RecordSeparatorInput`<sup>Optional</sup> <a name="RecordSeparatorInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparatorInput"></a>

```csharp
public string RecordSeparatorInput { get; }
```

- *Type:* string

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.delimiter"></a>

```csharp
public string Delimiter { get; }
```

- *Type:* string

---

##### `HeaderRequired`<sup>Required</sup> <a name="HeaderRequired" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.headerRequired"></a>

```csharp
public object HeaderRequired { get; }
```

- *Type:* object

---

##### `RecordSeparator`<sup>Required</sup> <a name="RecordSeparator" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.recordSeparator"></a>

```csharp
public string RecordSeparator { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsReportConfigCsvOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigCsvOptions">StorageInsightsReportConfigCsvOptions</a>

---


### StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsEndDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---


### StorageInsightsReportConfigFrequencyOptionsOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigFrequencyOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate">PutEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate">PutStartDate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEndDate` <a name="PutEndDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate"></a>

```csharp
private void PutEndDate(StorageInsightsReportConfigFrequencyOptionsEndDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putEndDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `PutStartDate` <a name="PutStartDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate"></a>

```csharp
private void PutStartDate(StorageInsightsReportConfigFrequencyOptionsStartDate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.putStartDate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate">EndDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate">StartDate</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput">EndDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput">FrequencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput">StartDateInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency">Frequency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EndDate`<sup>Required</sup> <a name="EndDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDate"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference EndDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference">StorageInsightsReportConfigFrequencyOptionsEndDateOutputReference</a>

---

##### `StartDate`<sup>Required</sup> <a name="StartDate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDate"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference StartDate { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference">StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference</a>

---

##### `EndDateInput`<sup>Optional</sup> <a name="EndDateInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.endDateInput"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsEndDate EndDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsEndDate">StorageInsightsReportConfigFrequencyOptionsEndDate</a>

---

##### `FrequencyInput`<sup>Optional</sup> <a name="FrequencyInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequencyInput"></a>

```csharp
public string FrequencyInput { get; }
```

- *Type:* string

---

##### `StartDateInput`<sup>Optional</sup> <a name="StartDateInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.startDateInput"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsStartDate StartDateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---

##### `Frequency`<sup>Required</sup> <a name="Frequency" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.frequency"></a>

```csharp
public string Frequency { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptions">StorageInsightsReportConfigFrequencyOptions</a>

---


### StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference <a name="StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput">DayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput">MonthInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput">YearInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day">Day</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month">Month</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year">Year</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.dayInput"></a>

```csharp
public double DayInput { get; }
```

- *Type:* double

---

##### `MonthInput`<sup>Optional</sup> <a name="MonthInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.monthInput"></a>

```csharp
public double MonthInput { get; }
```

- *Type:* double

---

##### `YearInput`<sup>Optional</sup> <a name="YearInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.yearInput"></a>

```csharp
public double YearInput { get; }
```

- *Type:* double

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.day"></a>

```csharp
public double Day { get; }
```

- *Type:* double

---

##### `Month`<sup>Required</sup> <a name="Month" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.month"></a>

```csharp
public double Month { get; }
```

- *Type:* double

---

##### `Year`<sup>Required</sup> <a name="Year" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.year"></a>

```csharp
public double Year { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDateOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsReportConfigFrequencyOptionsStartDate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigFrequencyOptionsStartDate">StorageInsightsReportConfigFrequencyOptionsStartDate</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions">PutStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters">PutStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters">ResetStorageFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutStorageDestinationOptions` <a name="PutStorageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions"></a>

```csharp
private void PutStorageDestinationOptions(StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageDestinationOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `PutStorageFilters` <a name="PutStorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters"></a>

```csharp
private void PutStorageFilters(StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.putStorageFilters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `ResetStorageFilters` <a name="ResetStorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.resetStorageFilters"></a>

```csharp
private void ResetStorageFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions">StorageDestinationOptions</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters">StorageFilters</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput">MetadataFieldsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput">StorageDestinationOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput">StorageFiltersInput</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields">MetadataFields</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `StorageDestinationOptions`<sup>Required</sup> <a name="StorageDestinationOptions" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptions"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference StorageDestinationOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference</a>

---

##### `StorageFilters`<sup>Required</sup> <a name="StorageFilters" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFilters"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference StorageFilters { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference</a>

---

##### `MetadataFieldsInput`<sup>Optional</sup> <a name="MetadataFieldsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFieldsInput"></a>

```csharp
public string[] MetadataFieldsInput { get; }
```

- *Type:* string[]

---

##### `StorageDestinationOptionsInput`<sup>Optional</sup> <a name="StorageDestinationOptionsInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageDestinationOptionsInput"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions StorageDestinationOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---

##### `StorageFiltersInput`<sup>Optional</sup> <a name="StorageFiltersInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.storageFiltersInput"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters StorageFiltersInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---

##### `MetadataFields`<sup>Required</sup> <a name="MetadataFields" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.metadataFields"></a>

```csharp
public string[] MetadataFields { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptions">StorageInsightsReportConfigObjectMetadataReportOptions</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath">ResetDestinationPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinationPath` <a name="ResetDestinationPath" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.resetDestinationPath"></a>

```csharp
private void ResetDestinationPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput">DestinationPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath">DestinationPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `DestinationPathInput`<sup>Optional</sup> <a name="DestinationPathInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPathInput"></a>

```csharp
public string DestinationPathInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `DestinationPath`<sup>Required</sup> <a name="DestinationPath" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.destinationPath"></a>

```csharp
public string DestinationPath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptionsOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions">StorageInsightsReportConfigObjectMetadataReportOptionsStorageDestinationOptions</a>

---


### StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference <a name="StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket">ResetBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucket` <a name="ResetBucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.resetBucket"></a>

```csharp
private void ResetBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFiltersOutputReference.property.internalValue"></a>

```csharp
public StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters">StorageInsightsReportConfigObjectMetadataReportOptionsStorageFilters</a>

---


### StorageInsightsReportConfigTimeoutsOutputReference <a name="StorageInsightsReportConfigTimeoutsOutputReference" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new StorageInsightsReportConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.storageInsightsReportConfig.StorageInsightsReportConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



