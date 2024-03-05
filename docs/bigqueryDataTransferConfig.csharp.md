# `bigqueryDataTransferConfig` Submodule <a name="`bigqueryDataTransferConfig` Submodule" id="@cdktf/provider-google.bigqueryDataTransferConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigqueryDataTransferConfig <a name="BigqueryDataTransferConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config google_bigquery_data_transfer_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfig(Construct Scope, string Id, BigqueryDataTransferConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig">BigqueryDataTransferConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig">BigqueryDataTransferConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences">PutEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions">PutScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams">PutSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays">ResetDataRefreshWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId">ResetDestinationDatasetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences">ResetEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic">ResetNotificationPubsubTopic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule">ResetSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions">ResetScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams">ResetSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName">ResetServiceAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEmailPreferences` <a name="PutEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences"></a>

```csharp
private void PutEmailPreferences(BigqueryDataTransferConfigEmailPreferences Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putEmailPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---

##### `PutScheduleOptions` <a name="PutScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions"></a>

```csharp
private void PutScheduleOptions(BigqueryDataTransferConfigScheduleOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putScheduleOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---

##### `PutSensitiveParams` <a name="PutSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams"></a>

```csharp
private void PutSensitiveParams(BigqueryDataTransferConfigSensitiveParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putSensitiveParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts"></a>

```csharp
private void PutTimeouts(BigqueryDataTransferConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

---

##### `ResetDataRefreshWindowDays` <a name="ResetDataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDataRefreshWindowDays"></a>

```csharp
private void ResetDataRefreshWindowDays()
```

##### `ResetDestinationDatasetId` <a name="ResetDestinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDestinationDatasetId"></a>

```csharp
private void ResetDestinationDatasetId()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEmailPreferences` <a name="ResetEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetEmailPreferences"></a>

```csharp
private void ResetEmailPreferences()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetNotificationPubsubTopic` <a name="ResetNotificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetNotificationPubsubTopic"></a>

```csharp
private void ResetNotificationPubsubTopic()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSchedule"></a>

```csharp
private void ResetSchedule()
```

##### `ResetScheduleOptions` <a name="ResetScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetScheduleOptions"></a>

```csharp
private void ResetScheduleOptions()
```

##### `ResetSensitiveParams` <a name="ResetSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetSensitiveParams"></a>

```csharp
private void ResetSensitiveParams()
```

##### `ResetServiceAccountName` <a name="ResetServiceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetServiceAccountName"></a>

```csharp
private void ResetServiceAccountName()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDataTransferConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDataTransferConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDataTransferConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

BigqueryDataTransferConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a BigqueryDataTransferConfig resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BigqueryDataTransferConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BigqueryDataTransferConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the BigqueryDataTransferConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences">EmailPreferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions">ScheduleOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams">SensitiveParams</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput">DataRefreshWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput">DataSourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput">DestinationDatasetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput">EmailPreferencesInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput">NotificationPubsubTopicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput">ParamsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput">ScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput">ScheduleOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput">SensitiveParamsInput</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput">ServiceAccountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays">DataRefreshWindowDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId">DestinationDatasetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic">NotificationPubsubTopic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params">Params</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule">Schedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName">ServiceAccountName</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `EmailPreferences`<sup>Required</sup> <a name="EmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferences"></a>

```csharp
public BigqueryDataTransferConfigEmailPreferencesOutputReference EmailPreferences { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference">BigqueryDataTransferConfigEmailPreferencesOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ScheduleOptions`<sup>Required</sup> <a name="ScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptions"></a>

```csharp
public BigqueryDataTransferConfigScheduleOptionsOutputReference ScheduleOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference">BigqueryDataTransferConfigScheduleOptionsOutputReference</a>

---

##### `SensitiveParams`<sup>Required</sup> <a name="SensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParams"></a>

```csharp
public BigqueryDataTransferConfigSensitiveParamsOutputReference SensitiveParams { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference">BigqueryDataTransferConfigSensitiveParamsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeouts"></a>

```csharp
public BigqueryDataTransferConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference">BigqueryDataTransferConfigTimeoutsOutputReference</a>

---

##### `DataRefreshWindowDaysInput`<sup>Optional</sup> <a name="DataRefreshWindowDaysInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDaysInput"></a>

```csharp
public double DataRefreshWindowDaysInput { get; }
```

- *Type:* double

---

##### `DataSourceIdInput`<sup>Optional</sup> <a name="DataSourceIdInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceIdInput"></a>

```csharp
public string DataSourceIdInput { get; }
```

- *Type:* string

---

##### `DestinationDatasetIdInput`<sup>Optional</sup> <a name="DestinationDatasetIdInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetIdInput"></a>

```csharp
public string DestinationDatasetIdInput { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EmailPreferencesInput`<sup>Optional</sup> <a name="EmailPreferencesInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.emailPreferencesInput"></a>

```csharp
public BigqueryDataTransferConfigEmailPreferences EmailPreferencesInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `NotificationPubsubTopicInput`<sup>Optional</sup> <a name="NotificationPubsubTopicInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopicInput"></a>

```csharp
public string NotificationPubsubTopicInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.paramsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParamsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleInput"></a>

```csharp
public string ScheduleInput { get; }
```

- *Type:* string

---

##### `ScheduleOptionsInput`<sup>Optional</sup> <a name="ScheduleOptionsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.scheduleOptionsInput"></a>

```csharp
public BigqueryDataTransferConfigScheduleOptions ScheduleOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---

##### `SensitiveParamsInput`<sup>Optional</sup> <a name="SensitiveParamsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.sensitiveParamsInput"></a>

```csharp
public BigqueryDataTransferConfigSensitiveParams SensitiveParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---

##### `ServiceAccountNameInput`<sup>Optional</sup> <a name="ServiceAccountNameInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountNameInput"></a>

```csharp
public string ServiceAccountNameInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataRefreshWindowDays`<sup>Required</sup> <a name="DataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataRefreshWindowDays"></a>

```csharp
public double DataRefreshWindowDays { get; }
```

- *Type:* double

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; }
```

- *Type:* string

---

##### `DestinationDatasetId`<sup>Required</sup> <a name="DestinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.destinationDatasetId"></a>

```csharp
public string DestinationDatasetId { get; }
```

- *Type:* string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `NotificationPubsubTopic`<sup>Required</sup> <a name="NotificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.notificationPubsubTopic"></a>

```csharp
public string NotificationPubsubTopic { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.params"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Params { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.schedule"></a>

```csharp
public string Schedule { get; }
```

- *Type:* string

---

##### `ServiceAccountName`<sup>Required</sup> <a name="ServiceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.serviceAccountName"></a>

```csharp
public string ServiceAccountName { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BigqueryDataTransferConfigConfig <a name="BigqueryDataTransferConfigConfig" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataSourceId,
    string DisplayName,
    System.Collections.Generic.IDictionary<string, string> Params,
    double DataRefreshWindowDays = null,
    string DestinationDatasetId = null,
    object Disabled = null,
    BigqueryDataTransferConfigEmailPreferences EmailPreferences = null,
    string Id = null,
    string Location = null,
    string NotificationPubsubTopic = null,
    string Project = null,
    string Schedule = null,
    BigqueryDataTransferConfigScheduleOptions ScheduleOptions = null,
    BigqueryDataTransferConfigSensitiveParams SensitiveParams = null,
    string ServiceAccountName = null,
    BigqueryDataTransferConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId">DataSourceId</a></code> | <code>string</code> | The data source id. Cannot be changed once the transfer config is created. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The user specified display name for the transfer config. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params">Params</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Parameters specific to each data source. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays">DataRefreshWindowDays</a></code> | <code>double</code> | The number of days to look back to automatically refresh the data. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId">DestinationDatasetId</a></code> | <code>string</code> | The BigQuery target dataset id. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled">Disabled</a></code> | <code>object</code> | When set to true, no runs are scheduled for a given transfer. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences">EmailPreferences</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | email_preferences block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location">Location</a></code> | <code>string</code> | The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic">NotificationPubsubTopic</a></code> | <code>string</code> | Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule">Schedule</a></code> | <code>string</code> | Data transfer schedule. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions">ScheduleOptions</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | schedule_options block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams">SensitiveParams</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | sensitive_params block. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName">ServiceAccountName</a></code> | <code>string</code> | Service account email. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataSourceId"></a>

```csharp
public string DataSourceId { get; set; }
```

- *Type:* string

The data source id. Cannot be changed once the transfer config is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#data_source_id BigqueryDataTransferConfig#data_source_id}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The user specified display name for the transfer config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#display_name BigqueryDataTransferConfig#display_name}

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.params"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Params { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Parameters specific to each data source.

For more information see the bq tab in the 'Setting up a data transfer'
section for each data source. For example the parameters for Cloud Storage transfers are listed here:
https://cloud.google.com/bigquery-transfer/docs/cloud-storage-transfer#bq

**NOTE** : If you are attempting to update a parameter that cannot be updated (due to api limitations) [please force recreation of the resource](https://www.terraform.io/cli/state/taint#forcing-re-creation-of-resources).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#params BigqueryDataTransferConfig#params}

---

##### `DataRefreshWindowDays`<sup>Optional</sup> <a name="DataRefreshWindowDays" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.dataRefreshWindowDays"></a>

```csharp
public double DataRefreshWindowDays { get; set; }
```

- *Type:* double

The number of days to look back to automatically refresh the data.

For example, if dataRefreshWindowDays = 10, then every day BigQuery
reingests data for [today-10, today-1], rather than ingesting data for
just [today-1]. Only valid if the data source supports the feature.
Set the value to 0 to use the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#data_refresh_window_days BigqueryDataTransferConfig#data_refresh_window_days}

---

##### `DestinationDatasetId`<sup>Optional</sup> <a name="DestinationDatasetId" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.destinationDatasetId"></a>

```csharp
public string DestinationDatasetId { get; set; }
```

- *Type:* string

The BigQuery target dataset id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#destination_dataset_id BigqueryDataTransferConfig#destination_dataset_id}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

When set to true, no runs are scheduled for a given transfer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#disabled BigqueryDataTransferConfig#disabled}

---

##### `EmailPreferences`<sup>Optional</sup> <a name="EmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.emailPreferences"></a>

```csharp
public BigqueryDataTransferConfigEmailPreferences EmailPreferences { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

email_preferences block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#email_preferences BigqueryDataTransferConfig#email_preferences}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#id BigqueryDataTransferConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The geographic location where the transfer config should reside. Examples: US, EU, asia-northeast1. The default value is US.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#location BigqueryDataTransferConfig#location}

---

##### `NotificationPubsubTopic`<sup>Optional</sup> <a name="NotificationPubsubTopic" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.notificationPubsubTopic"></a>

```csharp
public string NotificationPubsubTopic { get; set; }
```

- *Type:* string

Pub/Sub topic where notifications will be sent after transfer runs associated with this transfer config finish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#notification_pubsub_topic BigqueryDataTransferConfig#notification_pubsub_topic}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#project BigqueryDataTransferConfig#project}.

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.schedule"></a>

```csharp
public string Schedule { get; set; }
```

- *Type:* string

Data transfer schedule.

If the data source does not support a custom
schedule, this should be empty. If it is empty, the default value for
the data source will be used. The specified times are in UTC. Examples
of valid format: 1st,3rd monday of month 15:30, every wed,fri of jan,
jun 13:15, and first sunday of quarter 00:00. See more explanation
about the format here:
https://cloud.google.com/appengine/docs/flexible/python/scheduling-jobs-with-cron-yaml#the_schedule_format
NOTE: the granularity should be at least 8 hours, or less frequent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#schedule BigqueryDataTransferConfig#schedule}

---

##### `ScheduleOptions`<sup>Optional</sup> <a name="ScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.scheduleOptions"></a>

```csharp
public BigqueryDataTransferConfigScheduleOptions ScheduleOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

schedule_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#schedule_options BigqueryDataTransferConfig#schedule_options}

---

##### `SensitiveParams`<sup>Optional</sup> <a name="SensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.sensitiveParams"></a>

```csharp
public BigqueryDataTransferConfigSensitiveParams SensitiveParams { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

sensitive_params block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#sensitive_params BigqueryDataTransferConfig#sensitive_params}

---

##### `ServiceAccountName`<sup>Optional</sup> <a name="ServiceAccountName" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.serviceAccountName"></a>

```csharp
public string ServiceAccountName { get; set; }
```

- *Type:* string

Service account email.

If this field is set, transfer config will
be created with this service account credentials. It requires that
requesting user calling this API has permissions to act as this service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#service_account_name BigqueryDataTransferConfig#service_account_name}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigConfig.property.timeouts"></a>

```csharp
public BigqueryDataTransferConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts">BigqueryDataTransferConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#timeouts BigqueryDataTransferConfig#timeouts}

---

### BigqueryDataTransferConfigEmailPreferences <a name="BigqueryDataTransferConfigEmailPreferences" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigEmailPreferences {
    object EnableFailureEmail
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail">EnableFailureEmail</a></code> | <code>object</code> | If true, email notifications will be sent on transfer run failures. |

---

##### `EnableFailureEmail`<sup>Required</sup> <a name="EnableFailureEmail" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences.property.enableFailureEmail"></a>

```csharp
public object EnableFailureEmail { get; set; }
```

- *Type:* object

If true, email notifications will be sent on transfer run failures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#enable_failure_email BigqueryDataTransferConfig#enable_failure_email}

---

### BigqueryDataTransferConfigScheduleOptions <a name="BigqueryDataTransferConfigScheduleOptions" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigScheduleOptions {
    object DisableAutoScheduling = null,
    string EndTime = null,
    string StartTime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling">DisableAutoScheduling</a></code> | <code>object</code> | If true, automatic scheduling of data transfer runs for this configuration will be disabled. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime">EndTime</a></code> | <code>string</code> | Defines time to stop scheduling transfer runs. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime">StartTime</a></code> | <code>string</code> | Specifies time to start scheduling transfer runs. |

---

##### `DisableAutoScheduling`<sup>Optional</sup> <a name="DisableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.disableAutoScheduling"></a>

```csharp
public object DisableAutoScheduling { get; set; }
```

- *Type:* object

If true, automatic scheduling of data transfer runs for this configuration will be disabled.

The runs can be started on ad-hoc
basis using transferConfigs.startManualRuns API. When automatic
scheduling is disabled, the TransferConfig.schedule field will
be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#disable_auto_scheduling BigqueryDataTransferConfig#disable_auto_scheduling}

---

##### `EndTime`<sup>Optional</sup> <a name="EndTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.endTime"></a>

```csharp
public string EndTime { get; set; }
```

- *Type:* string

Defines time to stop scheduling transfer runs.

A transfer run cannot be
scheduled at or after the end time. The end time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#end_time BigqueryDataTransferConfig#end_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions.property.startTime"></a>

```csharp
public string StartTime { get; set; }
```

- *Type:* string

Specifies time to start scheduling transfer runs.

The first run will be
scheduled at or after the start time according to a recurrence pattern
defined in the schedule string. The start time can be changed at any
moment. The time when a data transfer can be triggered manually is not
limited by this option.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#start_time BigqueryDataTransferConfig#start_time}

---

### BigqueryDataTransferConfigSensitiveParams <a name="BigqueryDataTransferConfigSensitiveParams" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigSensitiveParams {
    string SecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | The Secret Access Key of the AWS account transferring data from. |

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

The Secret Access Key of the AWS account transferring data from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#secret_access_key BigqueryDataTransferConfig#secret_access_key}

---

### BigqueryDataTransferConfigTimeouts <a name="BigqueryDataTransferConfigTimeouts" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#create BigqueryDataTransferConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#delete BigqueryDataTransferConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_data_transfer_config#update BigqueryDataTransferConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigqueryDataTransferConfigEmailPreferencesOutputReference <a name="BigqueryDataTransferConfigEmailPreferencesOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigEmailPreferencesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput">EnableFailureEmailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail">EnableFailureEmail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableFailureEmailInput`<sup>Optional</sup> <a name="EnableFailureEmailInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmailInput"></a>

```csharp
public object EnableFailureEmailInput { get; }
```

- *Type:* object

---

##### `EnableFailureEmail`<sup>Required</sup> <a name="EnableFailureEmail" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.enableFailureEmail"></a>

```csharp
public object EnableFailureEmail { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferencesOutputReference.property.internalValue"></a>

```csharp
public BigqueryDataTransferConfigEmailPreferences InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigEmailPreferences">BigqueryDataTransferConfigEmailPreferences</a>

---


### BigqueryDataTransferConfigScheduleOptionsOutputReference <a name="BigqueryDataTransferConfigScheduleOptionsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigScheduleOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling">ResetDisableAutoScheduling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime">ResetEndTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisableAutoScheduling` <a name="ResetDisableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetDisableAutoScheduling"></a>

```csharp
private void ResetDisableAutoScheduling()
```

##### `ResetEndTime` <a name="ResetEndTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetEndTime"></a>

```csharp
private void ResetEndTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.resetStartTime"></a>

```csharp
private void ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput">DisableAutoSchedulingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput">EndTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling">DisableAutoScheduling</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime">EndTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisableAutoSchedulingInput`<sup>Optional</sup> <a name="DisableAutoSchedulingInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoSchedulingInput"></a>

```csharp
public object DisableAutoSchedulingInput { get; }
```

- *Type:* object

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTimeInput"></a>

```csharp
public string EndTimeInput { get; }
```

- *Type:* string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTimeInput"></a>

```csharp
public string StartTimeInput { get; }
```

- *Type:* string

---

##### `DisableAutoScheduling`<sup>Required</sup> <a name="DisableAutoScheduling" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.disableAutoScheduling"></a>

```csharp
public object DisableAutoScheduling { get; }
```

- *Type:* object

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.endTime"></a>

```csharp
public string EndTime { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptionsOutputReference.property.internalValue"></a>

```csharp
public BigqueryDataTransferConfigScheduleOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigScheduleOptions">BigqueryDataTransferConfigScheduleOptions</a>

---


### BigqueryDataTransferConfigSensitiveParamsOutputReference <a name="BigqueryDataTransferConfigSensitiveParamsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigSensitiveParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParamsOutputReference.property.internalValue"></a>

```csharp
public BigqueryDataTransferConfigSensitiveParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigSensitiveParams">BigqueryDataTransferConfigSensitiveParams</a>

---


### BigqueryDataTransferConfigTimeoutsOutputReference <a name="BigqueryDataTransferConfigTimeoutsOutputReference" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new BigqueryDataTransferConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.bigqueryDataTransferConfig.BigqueryDataTransferConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



