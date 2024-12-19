# `dialogflowCxSecuritySettings` Submodule <a name="`dialogflowCxSecuritySettings` Submodule" id="@cdktf/provider-google.dialogflowCxSecuritySettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxSecuritySettings <a name="DialogflowCxSecuritySettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings google_dialogflow_cx_security_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettings(Construct Scope, string Id, DialogflowCxSecuritySettingsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig">DialogflowCxSecuritySettingsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig">DialogflowCxSecuritySettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putAudioExportSettings">PutAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putInsightsExportSettings">PutInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetAudioExportSettings">ResetAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetDeidentifyTemplate">ResetDeidentifyTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInsightsExportSettings">ResetInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInspectTemplate">ResetInspectTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetPurgeDataTypes">ResetPurgeDataTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionScope">ResetRedactionScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionStrategy">ResetRedactionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionStrategy">ResetRetentionStrategy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionWindowDays">ResetRetentionWindowDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAudioExportSettings` <a name="PutAudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putAudioExportSettings"></a>

```csharp
private void PutAudioExportSettings(DialogflowCxSecuritySettingsAudioExportSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putAudioExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `PutInsightsExportSettings` <a name="PutInsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putInsightsExportSettings"></a>

```csharp
private void PutInsightsExportSettings(DialogflowCxSecuritySettingsInsightsExportSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putInsightsExportSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowCxSecuritySettingsTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts">DialogflowCxSecuritySettingsTimeouts</a>

---

##### `ResetAudioExportSettings` <a name="ResetAudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetAudioExportSettings"></a>

```csharp
private void ResetAudioExportSettings()
```

##### `ResetDeidentifyTemplate` <a name="ResetDeidentifyTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetDeidentifyTemplate"></a>

```csharp
private void ResetDeidentifyTemplate()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInsightsExportSettings` <a name="ResetInsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInsightsExportSettings"></a>

```csharp
private void ResetInsightsExportSettings()
```

##### `ResetInspectTemplate` <a name="ResetInspectTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetInspectTemplate"></a>

```csharp
private void ResetInspectTemplate()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetPurgeDataTypes` <a name="ResetPurgeDataTypes" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetPurgeDataTypes"></a>

```csharp
private void ResetPurgeDataTypes()
```

##### `ResetRedactionScope` <a name="ResetRedactionScope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionScope"></a>

```csharp
private void ResetRedactionScope()
```

##### `ResetRedactionStrategy` <a name="ResetRedactionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRedactionStrategy"></a>

```csharp
private void ResetRedactionStrategy()
```

##### `ResetRetentionStrategy` <a name="ResetRetentionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionStrategy"></a>

```csharp
private void ResetRetentionStrategy()
```

##### `ResetRetentionWindowDays` <a name="ResetRetentionWindowDays" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetRetentionWindowDays"></a>

```csharp
private void ResetRetentionWindowDays()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxSecuritySettings.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxSecuritySettings.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxSecuritySettings.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxSecuritySettings.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DialogflowCxSecuritySettings resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxSecuritySettings to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxSecuritySettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxSecuritySettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettings">AudioExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference">DialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettings">InsightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference">DialogflowCxSecuritySettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettingsInput">AudioExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplateInput">DeidentifyTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettingsInput">InsightsExportSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplateInput">InspectTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypesInput">PurgeDataTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScopeInput">RedactionScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategyInput">RedactionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategyInput">RetentionStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDaysInput">RetentionWindowDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypes">PurgeDataTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScope">RedactionScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategy">RedactionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategy">RetentionStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDays">RetentionWindowDays</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AudioExportSettings`<sup>Required</sup> <a name="AudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettings"></a>

```csharp
public DialogflowCxSecuritySettingsAudioExportSettingsOutputReference AudioExportSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference">DialogflowCxSecuritySettingsAudioExportSettingsOutputReference</a>

---

##### `InsightsExportSettings`<sup>Required</sup> <a name="InsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettings"></a>

```csharp
public DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference InsightsExportSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference">DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeouts"></a>

```csharp
public DialogflowCxSecuritySettingsTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference">DialogflowCxSecuritySettingsTimeoutsOutputReference</a>

---

##### `AudioExportSettingsInput`<sup>Optional</sup> <a name="AudioExportSettingsInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.audioExportSettingsInput"></a>

```csharp
public DialogflowCxSecuritySettingsAudioExportSettings AudioExportSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

---

##### `DeidentifyTemplateInput`<sup>Optional</sup> <a name="DeidentifyTemplateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplateInput"></a>

```csharp
public string DeidentifyTemplateInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InsightsExportSettingsInput`<sup>Optional</sup> <a name="InsightsExportSettingsInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.insightsExportSettingsInput"></a>

```csharp
public DialogflowCxSecuritySettingsInsightsExportSettings InsightsExportSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

---

##### `InspectTemplateInput`<sup>Optional</sup> <a name="InspectTemplateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplateInput"></a>

```csharp
public string InspectTemplateInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PurgeDataTypesInput`<sup>Optional</sup> <a name="PurgeDataTypesInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypesInput"></a>

```csharp
public string[] PurgeDataTypesInput { get; }
```

- *Type:* string[]

---

##### `RedactionScopeInput`<sup>Optional</sup> <a name="RedactionScopeInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScopeInput"></a>

```csharp
public string RedactionScopeInput { get; }
```

- *Type:* string

---

##### `RedactionStrategyInput`<sup>Optional</sup> <a name="RedactionStrategyInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategyInput"></a>

```csharp
public string RedactionStrategyInput { get; }
```

- *Type:* string

---

##### `RetentionStrategyInput`<sup>Optional</sup> <a name="RetentionStrategyInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategyInput"></a>

```csharp
public string RetentionStrategyInput { get; }
```

- *Type:* string

---

##### `RetentionWindowDaysInput`<sup>Optional</sup> <a name="RetentionWindowDaysInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDaysInput"></a>

```csharp
public double RetentionWindowDaysInput { get; }
```

- *Type:* double

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DeidentifyTemplate`<sup>Required</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InspectTemplate`<sup>Required</sup> <a name="InspectTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PurgeDataTypes`<sup>Required</sup> <a name="PurgeDataTypes" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.purgeDataTypes"></a>

```csharp
public string[] PurgeDataTypes { get; }
```

- *Type:* string[]

---

##### `RedactionScope`<sup>Required</sup> <a name="RedactionScope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionScope"></a>

```csharp
public string RedactionScope { get; }
```

- *Type:* string

---

##### `RedactionStrategy`<sup>Required</sup> <a name="RedactionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.redactionStrategy"></a>

```csharp
public string RedactionStrategy { get; }
```

- *Type:* string

---

##### `RetentionStrategy`<sup>Required</sup> <a name="RetentionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionStrategy"></a>

```csharp
public string RetentionStrategy { get; }
```

- *Type:* string

---

##### `RetentionWindowDays`<sup>Required</sup> <a name="RetentionWindowDays" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.retentionWindowDays"></a>

```csharp
public double RetentionWindowDays { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettings.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxSecuritySettingsAudioExportSettings <a name="DialogflowCxSecuritySettingsAudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettingsAudioExportSettings {
    string AudioExportPattern = null,
    string AudioFormat = null,
    object EnableAudioRedaction = null,
    string GcsBucket = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern">AudioExportPattern</a></code> | <code>string</code> | Filename pattern for exported audio. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat">AudioFormat</a></code> | <code>string</code> | File format for exported audio file. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction">EnableAudioRedaction</a></code> | <code>object</code> | Enable audio redaction if it is true. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | Cloud Storage bucket to export audio record to. |

---

##### `AudioExportPattern`<sup>Optional</sup> <a name="AudioExportPattern" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioExportPattern"></a>

```csharp
public string AudioExportPattern { get; set; }
```

- *Type:* string

Filename pattern for exported audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#audio_export_pattern DialogflowCxSecuritySettings#audio_export_pattern}

---

##### `AudioFormat`<sup>Optional</sup> <a name="AudioFormat" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.audioFormat"></a>

```csharp
public string AudioFormat { get; set; }
```

- *Type:* string

File format for exported audio file.

Currently only in telephony recordings.

* MULAW: G.711 mu-law PCM with 8kHz sample rate.
* MP3: MP3 file format.
* OGG: OGG Vorbis. Possible values: ["MULAW", "MP3", "OGG"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#audio_format DialogflowCxSecuritySettings#audio_format}

---

##### `EnableAudioRedaction`<sup>Optional</sup> <a name="EnableAudioRedaction" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.enableAudioRedaction"></a>

```csharp
public object EnableAudioRedaction { get; set; }
```

- *Type:* object

Enable audio redaction if it is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#enable_audio_redaction DialogflowCxSecuritySettings#enable_audio_redaction}

---

##### `GcsBucket`<sup>Optional</sup> <a name="GcsBucket" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; set; }
```

- *Type:* string

Cloud Storage bucket to export audio record to.

Setting this field would grant the Storage Object Creator role to the Dialogflow Service Agent. API caller that tries to modify this field should have the permission of storage.buckets.setIamPolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#gcs_bucket DialogflowCxSecuritySettings#gcs_bucket}

---

### DialogflowCxSecuritySettingsConfig <a name="DialogflowCxSecuritySettingsConfig" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettingsConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    string Location,
    DialogflowCxSecuritySettingsAudioExportSettings AudioExportSettings = null,
    string DeidentifyTemplate = null,
    string Id = null,
    DialogflowCxSecuritySettingsInsightsExportSettings InsightsExportSettings = null,
    string InspectTemplate = null,
    string Project = null,
    string[] PurgeDataTypes = null,
    string RedactionScope = null,
    string RedactionStrategy = null,
    string RetentionStrategy = null,
    double RetentionWindowDays = null,
    DialogflowCxSecuritySettingsTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the security settings, unique within the location. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.location">Location</a></code> | <code>string</code> | The location these settings are located in. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.audioExportSettings">AudioExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a></code> | audio_export_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.deidentifyTemplate">DeidentifyTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#id DialogflowCxSecuritySettings#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.insightsExportSettings">InsightsExportSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a></code> | insights_export_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.inspectTemplate">InspectTemplate</a></code> | <code>string</code> | [DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#project DialogflowCxSecuritySettings#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.purgeDataTypes">PurgeDataTypes</a></code> | <code>string[]</code> | List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionScope">RedactionScope</a></code> | <code>string</code> | Defines what types of data to redact. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionStrategy">RedactionStrategy</a></code> | <code>string</code> | Defines how we redact data. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionStrategy">RetentionStrategy</a></code> | <code>string</code> | Defines how long we retain persisted data that contains sensitive info. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionWindowDays">RetentionWindowDays</a></code> | <code>double</code> | Retains the data for the specified number of days. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts">DialogflowCxSecuritySettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the security settings, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#display_name DialogflowCxSecuritySettings#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location these settings are located in.

Settings can only be applied to an agent in the same location.
See [Available Regions](https://cloud.google.com/dialogflow/cx/docs/concept/region#avail) for a list of supported locations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#location DialogflowCxSecuritySettings#location}

---

##### `AudioExportSettings`<sup>Optional</sup> <a name="AudioExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.audioExportSettings"></a>

```csharp
public DialogflowCxSecuritySettingsAudioExportSettings AudioExportSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

audio_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#audio_export_settings DialogflowCxSecuritySettings#audio_export_settings}

---

##### `DeidentifyTemplate`<sup>Optional</sup> <a name="DeidentifyTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.deidentifyTemplate"></a>

```csharp
public string DeidentifyTemplate { get; set; }
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) deidentify template name. Use this template to define de-identification configuration for the content. If empty, Dialogflow replaces sensitive info with [redacted] text. Note: deidentifyTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/deidentifyTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/deidentifyTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#deidentify_template DialogflowCxSecuritySettings#deidentify_template}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#id DialogflowCxSecuritySettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InsightsExportSettings`<sup>Optional</sup> <a name="InsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.insightsExportSettings"></a>

```csharp
public DialogflowCxSecuritySettingsInsightsExportSettings InsightsExportSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

insights_export_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#insights_export_settings DialogflowCxSecuritySettings#insights_export_settings}

---

##### `InspectTemplate`<sup>Optional</sup> <a name="InspectTemplate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.inspectTemplate"></a>

```csharp
public string InspectTemplate { get; set; }
```

- *Type:* string

[DLP](https://cloud.google.com/dlp/docs) inspect template name. Use this template to define inspect base settings. If empty, we use the default DLP inspect config. Note: inspectTemplate must be located in the same region as the SecuritySettings. Format: projects/<Project ID>/locations/<Location ID>/inspectTemplates/<Template ID> OR organizations/<Organization ID>/locations/<Location ID>/inspectTemplates/<Template ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#inspect_template DialogflowCxSecuritySettings#inspect_template}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#project DialogflowCxSecuritySettings#project}.

---

##### `PurgeDataTypes`<sup>Optional</sup> <a name="PurgeDataTypes" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.purgeDataTypes"></a>

```csharp
public string[] PurgeDataTypes { get; set; }
```

- *Type:* string[]

List of types of data to remove when retention settings triggers purge. Possible values: ["DIALOGFLOW_HISTORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#purge_data_types DialogflowCxSecuritySettings#purge_data_types}

---

##### `RedactionScope`<sup>Optional</sup> <a name="RedactionScope" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionScope"></a>

```csharp
public string RedactionScope { get; set; }
```

- *Type:* string

Defines what types of data to redact.

If not set, defaults to not redacting any kind of data.

* REDACT_DISK_STORAGE: On data to be written to disk or similar devices that are capable of holding data even if power is disconnected. This includes data that are temporarily saved on disk. Possible values: ["REDACT_DISK_STORAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#redaction_scope DialogflowCxSecuritySettings#redaction_scope}

---

##### `RedactionStrategy`<sup>Optional</sup> <a name="RedactionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.redactionStrategy"></a>

```csharp
public string RedactionStrategy { get; set; }
```

- *Type:* string

Defines how we redact data.

If not set, defaults to not redacting.

* REDACT_WITH_SERVICE: Call redaction service to clean up the data to be persisted. Possible values: ["REDACT_WITH_SERVICE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#redaction_strategy DialogflowCxSecuritySettings#redaction_strategy}

---

##### `RetentionStrategy`<sup>Optional</sup> <a name="RetentionStrategy" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionStrategy"></a>

```csharp
public string RetentionStrategy { get; set; }
```

- *Type:* string

Defines how long we retain persisted data that contains sensitive info.

Only one of 'retention_window_days' and 'retention_strategy' may be set.

* REMOVE_AFTER_CONVERSATION: Removes data when the conversation ends. If there is no conversation explicitly established, a default conversation ends when the corresponding Dialogflow session ends. Possible values: ["REMOVE_AFTER_CONVERSATION"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#retention_strategy DialogflowCxSecuritySettings#retention_strategy}

---

##### `RetentionWindowDays`<sup>Optional</sup> <a name="RetentionWindowDays" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.retentionWindowDays"></a>

```csharp
public double RetentionWindowDays { get; set; }
```

- *Type:* double

Retains the data for the specified number of days.

User must set a value lower than Dialogflow's default 365d TTL (30 days for Agent Assist traffic), higher value will be ignored and use default. Setting a value higher than that has no effect. A missing value or setting to 0 also means we use default TTL.
Only one of 'retention_window_days' and 'retention_strategy' may be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#retention_window_days DialogflowCxSecuritySettings#retention_window_days}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsConfig.property.timeouts"></a>

```csharp
public DialogflowCxSecuritySettingsTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts">DialogflowCxSecuritySettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#timeouts DialogflowCxSecuritySettings#timeouts}

---

### DialogflowCxSecuritySettingsInsightsExportSettings <a name="DialogflowCxSecuritySettingsInsightsExportSettings" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettingsInsightsExportSettings {
    object EnableInsightsExport
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport">EnableInsightsExport</a></code> | <code>object</code> | If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers. |

---

##### `EnableInsightsExport`<sup>Required</sup> <a name="EnableInsightsExport" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings.property.enableInsightsExport"></a>

```csharp
public object EnableInsightsExport { get; set; }
```

- *Type:* object

If enabled, we will automatically exports conversations to Insights and Insights runs its analyzers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#enable_insights_export DialogflowCxSecuritySettings#enable_insights_export}

---

### DialogflowCxSecuritySettingsTimeouts <a name="DialogflowCxSecuritySettingsTimeouts" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettingsTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#create DialogflowCxSecuritySettings#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#delete DialogflowCxSecuritySettings#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#update DialogflowCxSecuritySettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#create DialogflowCxSecuritySettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#delete DialogflowCxSecuritySettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.1/docs/resources/dialogflow_cx_security_settings#update DialogflowCxSecuritySettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxSecuritySettingsAudioExportSettingsOutputReference <a name="DialogflowCxSecuritySettingsAudioExportSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettingsAudioExportSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern">ResetAudioExportPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat">ResetAudioFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction">ResetEnableAudioRedaction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket">ResetGcsBucket</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAudioExportPattern` <a name="ResetAudioExportPattern" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioExportPattern"></a>

```csharp
private void ResetAudioExportPattern()
```

##### `ResetAudioFormat` <a name="ResetAudioFormat" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetAudioFormat"></a>

```csharp
private void ResetAudioFormat()
```

##### `ResetEnableAudioRedaction` <a name="ResetEnableAudioRedaction" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetEnableAudioRedaction"></a>

```csharp
private void ResetEnableAudioRedaction()
```

##### `ResetGcsBucket` <a name="ResetGcsBucket" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.resetGcsBucket"></a>

```csharp
private void ResetGcsBucket()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput">AudioExportPatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput">AudioFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput">EnableAudioRedactionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput">GcsBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern">AudioExportPattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat">AudioFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction">EnableAudioRedaction</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket">GcsBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioExportPatternInput`<sup>Optional</sup> <a name="AudioExportPatternInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPatternInput"></a>

```csharp
public string AudioExportPatternInput { get; }
```

- *Type:* string

---

##### `AudioFormatInput`<sup>Optional</sup> <a name="AudioFormatInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormatInput"></a>

```csharp
public string AudioFormatInput { get; }
```

- *Type:* string

---

##### `EnableAudioRedactionInput`<sup>Optional</sup> <a name="EnableAudioRedactionInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedactionInput"></a>

```csharp
public object EnableAudioRedactionInput { get; }
```

- *Type:* object

---

##### `GcsBucketInput`<sup>Optional</sup> <a name="GcsBucketInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucketInput"></a>

```csharp
public string GcsBucketInput { get; }
```

- *Type:* string

---

##### `AudioExportPattern`<sup>Required</sup> <a name="AudioExportPattern" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioExportPattern"></a>

```csharp
public string AudioExportPattern { get; }
```

- *Type:* string

---

##### `AudioFormat`<sup>Required</sup> <a name="AudioFormat" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.audioFormat"></a>

```csharp
public string AudioFormat { get; }
```

- *Type:* string

---

##### `EnableAudioRedaction`<sup>Required</sup> <a name="EnableAudioRedaction" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.enableAudioRedaction"></a>

```csharp
public object EnableAudioRedaction { get; }
```

- *Type:* object

---

##### `GcsBucket`<sup>Required</sup> <a name="GcsBucket" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.gcsBucket"></a>

```csharp
public string GcsBucket { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxSecuritySettingsAudioExportSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsAudioExportSettings">DialogflowCxSecuritySettingsAudioExportSettings</a>

---


### DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference <a name="DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput">EnableInsightsExportInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport">EnableInsightsExport</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableInsightsExportInput`<sup>Optional</sup> <a name="EnableInsightsExportInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExportInput"></a>

```csharp
public object EnableInsightsExportInput { get; }
```

- *Type:* object

---

##### `EnableInsightsExport`<sup>Required</sup> <a name="EnableInsightsExport" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.enableInsightsExport"></a>

```csharp
public object EnableInsightsExport { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxSecuritySettingsInsightsExportSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsInsightsExportSettings">DialogflowCxSecuritySettingsInsightsExportSettings</a>

---


### DialogflowCxSecuritySettingsTimeoutsOutputReference <a name="DialogflowCxSecuritySettingsTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxSecuritySettingsTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxSecuritySettings.DialogflowCxSecuritySettingsTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



