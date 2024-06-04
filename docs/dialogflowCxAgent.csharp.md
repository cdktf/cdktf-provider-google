# `dialogflowCxAgent` Submodule <a name="`dialogflowCxAgent` Submodule" id="@cdktf/provider-google.dialogflowCxAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxAgent <a name="DialogflowCxAgent" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent google_dialogflow_cx_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgent(Construct Scope, string Id, DialogflowCxAgentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig">DialogflowCxAgentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig">DialogflowCxAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings">PutAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings">PutGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings">PutSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings">PutTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAdvancedSettings">ResetAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAvatarUri">ResetAvatarUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableSpellCorrection">ResetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetGitIntegrationSettings">ResetGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSecuritySettings">ResetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSpeechToTextSettings">ResetSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSupportedLanguageCodes">ResetSupportedLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTextToSpeechSettings">ResetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdvancedSettings` <a name="PutAdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings"></a>

```csharp
private void PutAdvancedSettings(DialogflowCxAgentAdvancedSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---

##### `PutGitIntegrationSettings` <a name="PutGitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings"></a>

```csharp
private void PutGitIntegrationSettings(DialogflowCxAgentGitIntegrationSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---

##### `PutSpeechToTextSettings` <a name="PutSpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings"></a>

```csharp
private void PutSpeechToTextSettings(DialogflowCxAgentSpeechToTextSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---

##### `PutTextToSpeechSettings` <a name="PutTextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings"></a>

```csharp
private void PutTextToSpeechSettings(DialogflowCxAgentTextToSpeechSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowCxAgentTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

---

##### `ResetAdvancedSettings` <a name="ResetAdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAdvancedSettings"></a>

```csharp
private void ResetAdvancedSettings()
```

##### `ResetAvatarUri` <a name="ResetAvatarUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAvatarUri"></a>

```csharp
private void ResetAvatarUri()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnableSpellCorrection` <a name="ResetEnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableSpellCorrection"></a>

```csharp
private void ResetEnableSpellCorrection()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableStackdriverLogging"></a>

```csharp
private void ResetEnableStackdriverLogging()
```

##### `ResetGitIntegrationSettings` <a name="ResetGitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetGitIntegrationSettings"></a>

```csharp
private void ResetGitIntegrationSettings()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetSecuritySettings` <a name="ResetSecuritySettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSecuritySettings"></a>

```csharp
private void ResetSecuritySettings()
```

##### `ResetSpeechToTextSettings` <a name="ResetSpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSpeechToTextSettings"></a>

```csharp
private void ResetSpeechToTextSettings()
```

##### `ResetSupportedLanguageCodes` <a name="ResetSupportedLanguageCodes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSupportedLanguageCodes"></a>

```csharp
private void ResetSupportedLanguageCodes()
```

##### `ResetTextToSpeechSettings` <a name="ResetTextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTextToSpeechSettings"></a>

```csharp
private void ResetTextToSpeechSettings()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxAgent resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxAgent.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxAgent.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxAgent.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxAgent.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DialogflowCxAgent resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxAgent to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettings">AdvancedSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference">DialogflowCxAgentAdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettings">GitIntegrationSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettings">SpeechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference">DialogflowCxAgentSpeechToTextSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.startFlow">StartFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettings">TextToSpeechSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference">DialogflowCxAgentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference">DialogflowCxAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettingsInput">AdvancedSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUriInput">AvatarUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCodeInput">DefaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrectionInput">EnableSpellCorrectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettingsInput">GitIntegrationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettingsInput">SecuritySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettingsInput">SpeechToTextSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodesInput">SupportedLanguageCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettingsInput">TextToSpeechSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZoneInput">TimeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUri">AvatarUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettings">SecuritySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZone">TimeZone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdvancedSettings`<sup>Required</sup> <a name="AdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettings"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsOutputReference AdvancedSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference">DialogflowCxAgentAdvancedSettingsOutputReference</a>

---

##### `GitIntegrationSettings`<sup>Required</sup> <a name="GitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettings"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettingsOutputReference GitIntegrationSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SpeechToTextSettings`<sup>Required</sup> <a name="SpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettings"></a>

```csharp
public DialogflowCxAgentSpeechToTextSettingsOutputReference SpeechToTextSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference">DialogflowCxAgentSpeechToTextSettingsOutputReference</a>

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.startFlow"></a>

```csharp
public string StartFlow { get; }
```

- *Type:* string

---

##### `TextToSpeechSettings`<sup>Required</sup> <a name="TextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettings"></a>

```csharp
public DialogflowCxAgentTextToSpeechSettingsOutputReference TextToSpeechSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference">DialogflowCxAgentTextToSpeechSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeouts"></a>

```csharp
public DialogflowCxAgentTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference">DialogflowCxAgentTimeoutsOutputReference</a>

---

##### `AdvancedSettingsInput`<sup>Optional</sup> <a name="AdvancedSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettingsInput"></a>

```csharp
public DialogflowCxAgentAdvancedSettings AdvancedSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---

##### `AvatarUriInput`<sup>Optional</sup> <a name="AvatarUriInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUriInput"></a>

```csharp
public string AvatarUriInput { get; }
```

- *Type:* string

---

##### `DefaultLanguageCodeInput`<sup>Optional</sup> <a name="DefaultLanguageCodeInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCodeInput"></a>

```csharp
public string DefaultLanguageCodeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableSpellCorrectionInput`<sup>Optional</sup> <a name="EnableSpellCorrectionInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrectionInput"></a>

```csharp
public object EnableSpellCorrectionInput { get; }
```

- *Type:* object

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLoggingInput"></a>

```csharp
public object EnableStackdriverLoggingInput { get; }
```

- *Type:* object

---

##### `GitIntegrationSettingsInput`<sup>Optional</sup> <a name="GitIntegrationSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettingsInput"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettings GitIntegrationSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `SecuritySettingsInput`<sup>Optional</sup> <a name="SecuritySettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettingsInput"></a>

```csharp
public string SecuritySettingsInput { get; }
```

- *Type:* string

---

##### `SpeechToTextSettingsInput`<sup>Optional</sup> <a name="SpeechToTextSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettingsInput"></a>

```csharp
public DialogflowCxAgentSpeechToTextSettings SpeechToTextSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---

##### `SupportedLanguageCodesInput`<sup>Optional</sup> <a name="SupportedLanguageCodesInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodesInput"></a>

```csharp
public string[] SupportedLanguageCodesInput { get; }
```

- *Type:* string[]

---

##### `TextToSpeechSettingsInput`<sup>Optional</sup> <a name="TextToSpeechSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettingsInput"></a>

```csharp
public DialogflowCxAgentTextToSpeechSettings TextToSpeechSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZoneInput"></a>

```csharp
public string TimeZoneInput { get; }
```

- *Type:* string

---

##### `AvatarUri`<sup>Required</sup> <a name="AvatarUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUri"></a>

```csharp
public string AvatarUri { get; }
```

- *Type:* string

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableSpellCorrection`<sup>Required</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrection"></a>

```csharp
public object EnableSpellCorrection { get; }
```

- *Type:* object

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettings"></a>

```csharp
public string SecuritySettings { get; }
```

- *Type:* string

---

##### `SupportedLanguageCodes`<sup>Required</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodes"></a>

```csharp
public string[] SupportedLanguageCodes { get; }
```

- *Type:* string[]

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZone"></a>

```csharp
public string TimeZone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxAgentAdvancedSettings <a name="DialogflowCxAgentAdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentAdvancedSettings {
    DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination AudioExportGcsDestination = null,
    DialogflowCxAgentAdvancedSettingsDtmfSettings DtmfSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination">AudioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | audio_export_gcs_destination block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.dtmfSettings">DtmfSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | dtmf_settings block. |

---

##### `AudioExportGcsDestination`<sup>Optional</sup> <a name="AudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination AudioExportGcsDestination { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#audio_export_gcs_destination DialogflowCxAgent#audio_export_gcs_destination}

---

##### `DtmfSettings`<sup>Optional</sup> <a name="DtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.dtmfSettings"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsDtmfSettings DtmfSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#dtmf_settings DialogflowCxAgent#dtmf_settings}

---

### DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination <a name="DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination {
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri">Uri</a></code> | <code>string</code> | The Google Cloud Storage URI for the exported objects. |

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#uri DialogflowCxAgent#uri}

---

### DialogflowCxAgentAdvancedSettingsDtmfSettings <a name="DialogflowCxAgentAdvancedSettingsDtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentAdvancedSettingsDtmfSettings {
    object Enabled = null,
    string FinishDigit = null,
    double MaxDigits = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled">Enabled</a></code> | <code>object</code> | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit">FinishDigit</a></code> | <code>string</code> | The digit that terminates a DTMF digit sequence. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits">MaxDigits</a></code> | <code>double</code> | Max length of DTMF digits. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#enabled DialogflowCxAgent#enabled}

---

##### `FinishDigit`<sup>Optional</sup> <a name="FinishDigit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit"></a>

```csharp
public string FinishDigit { get; set; }
```

- *Type:* string

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#finish_digit DialogflowCxAgent#finish_digit}

---

##### `MaxDigits`<sup>Optional</sup> <a name="MaxDigits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits"></a>

```csharp
public double MaxDigits { get; set; }
```

- *Type:* double

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#max_digits DialogflowCxAgent#max_digits}

---

### DialogflowCxAgentConfig <a name="DialogflowCxAgentConfig" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DefaultLanguageCode,
    string DisplayName,
    string Location,
    string TimeZone,
    DialogflowCxAgentAdvancedSettings AdvancedSettings = null,
    string AvatarUri = null,
    string Description = null,
    object EnableSpellCorrection = null,
    object EnableStackdriverLogging = null,
    DialogflowCxAgentGitIntegrationSettings GitIntegrationSettings = null,
    string Id = null,
    string Project = null,
    string SecuritySettings = null,
    DialogflowCxAgentSpeechToTextSettings SpeechToTextSettings = null,
    string[] SupportedLanguageCodes = null,
    DialogflowCxAgentTextToSpeechSettings TextToSpeechSettings = null,
    DialogflowCxAgentTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.defaultLanguageCode">DefaultLanguageCode</a></code> | <code>string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.location">Location</a></code> | <code>string</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeZone">TimeZone</a></code> | <code>string</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.advancedSettings">AdvancedSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.avatarUri">AvatarUri</a></code> | <code>string</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.description">Description</a></code> | <code>string</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>object</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.gitIntegrationSettings">GitIntegrationSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | git_integration_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.securitySettings">SecuritySettings</a></code> | <code>string</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.speechToTextSettings">SpeechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.supportedLanguageCodes">SupportedLanguageCodes</a></code> | <code>string[]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.textToSpeechSettings">TextToSpeechSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DefaultLanguageCode`<sup>Required</sup> <a name="DefaultLanguageCode" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.defaultLanguageCode"></a>

```csharp
public string DefaultLanguageCode { get; set; }
```

- *Type:* string

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#default_language_code DialogflowCxAgent#default_language_code}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#location DialogflowCxAgent#location}

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeZone"></a>

```csharp
public string TimeZone { get; set; }
```

- *Type:* string

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#time_zone DialogflowCxAgent#time_zone}

---

##### `AdvancedSettings`<sup>Optional</sup> <a name="AdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.advancedSettings"></a>

```csharp
public DialogflowCxAgentAdvancedSettings AdvancedSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#advanced_settings DialogflowCxAgent#advanced_settings}

---

##### `AvatarUri`<sup>Optional</sup> <a name="AvatarUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.avatarUri"></a>

```csharp
public string AvatarUri { get; set; }
```

- *Type:* string

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#avatar_uri DialogflowCxAgent#avatar_uri}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#description DialogflowCxAgent#description}

---

##### `EnableSpellCorrection`<sup>Optional</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableSpellCorrection"></a>

```csharp
public object EnableSpellCorrection { get; set; }
```

- *Type:* object

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#enable_spell_correction DialogflowCxAgent#enable_spell_correction}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; set; }
```

- *Type:* object

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}

---

##### `GitIntegrationSettings`<sup>Optional</sup> <a name="GitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.gitIntegrationSettings"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettings GitIntegrationSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

git_integration_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#git_integration_settings DialogflowCxAgent#git_integration_settings}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}.

---

##### `SecuritySettings`<sup>Optional</sup> <a name="SecuritySettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.securitySettings"></a>

```csharp
public string SecuritySettings { get; set; }
```

- *Type:* string

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#security_settings DialogflowCxAgent#security_settings}

---

##### `SpeechToTextSettings`<sup>Optional</sup> <a name="SpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.speechToTextSettings"></a>

```csharp
public DialogflowCxAgentSpeechToTextSettings SpeechToTextSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#speech_to_text_settings DialogflowCxAgent#speech_to_text_settings}

---

##### `SupportedLanguageCodes`<sup>Optional</sup> <a name="SupportedLanguageCodes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.supportedLanguageCodes"></a>

```csharp
public string[] SupportedLanguageCodes { get; set; }
```

- *Type:* string[]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#supported_language_codes DialogflowCxAgent#supported_language_codes}

---

##### `TextToSpeechSettings`<sup>Optional</sup> <a name="TextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.textToSpeechSettings"></a>

```csharp
public DialogflowCxAgentTextToSpeechSettings TextToSpeechSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#text_to_speech_settings DialogflowCxAgent#text_to_speech_settings}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeouts"></a>

```csharp
public DialogflowCxAgentTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#timeouts DialogflowCxAgent#timeouts}

---

### DialogflowCxAgentGitIntegrationSettings <a name="DialogflowCxAgentGitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentGitIntegrationSettings {
    DialogflowCxAgentGitIntegrationSettingsGithubSettings GithubSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.property.githubSettings">GithubSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | github_settings block. |

---

##### `GithubSettings`<sup>Optional</sup> <a name="GithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.property.githubSettings"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettingsGithubSettings GithubSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

github_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#github_settings DialogflowCxAgent#github_settings}

---

### DialogflowCxAgentGitIntegrationSettingsGithubSettings <a name="DialogflowCxAgentGitIntegrationSettingsGithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentGitIntegrationSettingsGithubSettings {
    string AccessToken = null,
    string[] Branches = null,
    string DisplayName = null,
    string RepositoryUri = null,
    string TrackingBranch = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken">AccessToken</a></code> | <code>string</code> | The access token used to authenticate the access to the GitHub repository. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches">Branches</a></code> | <code>string[]</code> | A list of branches configured to be used from Dialogflow. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName">DisplayName</a></code> | <code>string</code> | The unique repository display name for the GitHub repository. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri">RepositoryUri</a></code> | <code>string</code> | The GitHub repository URI related to the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch">TrackingBranch</a></code> | <code>string</code> | The branch of the GitHub repository tracked for this agent. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken"></a>

```csharp
public string AccessToken { get; set; }
```

- *Type:* string

The access token used to authenticate the access to the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#access_token DialogflowCxAgent#access_token}

---

##### `Branches`<sup>Optional</sup> <a name="Branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches"></a>

```csharp
public string[] Branches { get; set; }
```

- *Type:* string[]

A list of branches configured to be used from Dialogflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#branches DialogflowCxAgent#branches}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The unique repository display name for the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

##### `RepositoryUri`<sup>Optional</sup> <a name="RepositoryUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri"></a>

```csharp
public string RepositoryUri { get; set; }
```

- *Type:* string

The GitHub repository URI related to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#repository_uri DialogflowCxAgent#repository_uri}

---

##### `TrackingBranch`<sup>Optional</sup> <a name="TrackingBranch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch"></a>

```csharp
public string TrackingBranch { get; set; }
```

- *Type:* string

The branch of the GitHub repository tracked for this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#tracking_branch DialogflowCxAgent#tracking_branch}

---

### DialogflowCxAgentSpeechToTextSettings <a name="DialogflowCxAgentSpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentSpeechToTextSettings {
    object EnableSpeechAdaptation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation">EnableSpeechAdaptation</a></code> | <code>object</code> | Whether to use speech adaptation for speech recognition. |

---

##### `EnableSpeechAdaptation`<sup>Optional</sup> <a name="EnableSpeechAdaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation"></a>

```csharp
public object EnableSpeechAdaptation { get; set; }
```

- *Type:* object

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#enable_speech_adaptation DialogflowCxAgent#enable_speech_adaptation}

---

### DialogflowCxAgentTextToSpeechSettings <a name="DialogflowCxAgentTextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentTextToSpeechSettings {
    string SynthesizeSpeechConfigs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code>string</code> | Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified. |

---

##### `SynthesizeSpeechConfigs`<sup>Optional</sup> <a name="SynthesizeSpeechConfigs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```csharp
public string SynthesizeSpeechConfigs { get; set; }
```

- *Type:* string

Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#synthesize_speech_configs DialogflowCxAgent#synthesize_speech_configs}

---

### DialogflowCxAgentTimeouts <a name="DialogflowCxAgentTimeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference <a name="DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri"></a>

```csharp
private void ResetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---


### DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference <a name="DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit">ResetFinishDigit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits">ResetMaxDigits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetFinishDigit` <a name="ResetFinishDigit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit"></a>

```csharp
private void ResetFinishDigit()
```

##### `ResetMaxDigits` <a name="ResetMaxDigits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits"></a>

```csharp
private void ResetMaxDigits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput">FinishDigitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput">MaxDigitsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit">FinishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits">MaxDigits</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FinishDigitInput`<sup>Optional</sup> <a name="FinishDigitInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput"></a>

```csharp
public string FinishDigitInput { get; }
```

- *Type:* string

---

##### `MaxDigitsInput`<sup>Optional</sup> <a name="MaxDigitsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput"></a>

```csharp
public double MaxDigitsInput { get; }
```

- *Type:* double

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FinishDigit`<sup>Required</sup> <a name="FinishDigit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit"></a>

```csharp
public string FinishDigit { get; }
```

- *Type:* string

---

##### `MaxDigits`<sup>Required</sup> <a name="MaxDigits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits"></a>

```csharp
public double MaxDigits { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsDtmfSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---


### DialogflowCxAgentAdvancedSettingsOutputReference <a name="DialogflowCxAgentAdvancedSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentAdvancedSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination">PutAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings">PutDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination">ResetAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings">ResetDtmfSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAudioExportGcsDestination` <a name="PutAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination"></a>

```csharp
private void PutAudioExportGcsDestination(DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `PutDtmfSettings` <a name="PutDtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings"></a>

```csharp
private void PutDtmfSettings(DialogflowCxAgentAdvancedSettingsDtmfSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `ResetAudioExportGcsDestination` <a name="ResetAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination"></a>

```csharp
private void ResetAudioExportGcsDestination()
```

##### `ResetDtmfSettings` <a name="ResetDtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings"></a>

```csharp
private void ResetDtmfSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination">AudioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings">DtmfSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput">AudioExportGcsDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput">DtmfSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AudioExportGcsDestination`<sup>Required</sup> <a name="AudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference AudioExportGcsDestination { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a>

---

##### `DtmfSettings`<sup>Required</sup> <a name="DtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference DtmfSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a>

---

##### `AudioExportGcsDestinationInput`<sup>Optional</sup> <a name="AudioExportGcsDestinationInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination AudioExportGcsDestinationInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `DtmfSettingsInput`<sup>Optional</sup> <a name="DtmfSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput"></a>

```csharp
public DialogflowCxAgentAdvancedSettingsDtmfSettings DtmfSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxAgentAdvancedSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---


### DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference <a name="DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches">ResetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri">ResetRepositoryUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch">ResetTrackingBranch</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken"></a>

```csharp
private void ResetAccessToken()
```

##### `ResetBranches` <a name="ResetBranches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches"></a>

```csharp
private void ResetBranches()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName"></a>

```csharp
private void ResetDisplayName()
```

##### `ResetRepositoryUri` <a name="ResetRepositoryUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri"></a>

```csharp
private void ResetRepositoryUri()
```

##### `ResetTrackingBranch` <a name="ResetTrackingBranch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch"></a>

```csharp
private void ResetTrackingBranch()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput">BranchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput">RepositoryUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput">TrackingBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken">AccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches">Branches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri">RepositoryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch">TrackingBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput"></a>

```csharp
public string AccessTokenInput { get; }
```

- *Type:* string

---

##### `BranchesInput`<sup>Optional</sup> <a name="BranchesInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput"></a>

```csharp
public string[] BranchesInput { get; }
```

- *Type:* string[]

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `RepositoryUriInput`<sup>Optional</sup> <a name="RepositoryUriInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput"></a>

```csharp
public string RepositoryUriInput { get; }
```

- *Type:* string

---

##### `TrackingBranchInput`<sup>Optional</sup> <a name="TrackingBranchInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput"></a>

```csharp
public string TrackingBranchInput { get; }
```

- *Type:* string

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken"></a>

```csharp
public string AccessToken { get; }
```

- *Type:* string

---

##### `Branches`<sup>Required</sup> <a name="Branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches"></a>

```csharp
public string[] Branches { get; }
```

- *Type:* string[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `RepositoryUri`<sup>Required</sup> <a name="RepositoryUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri"></a>

```csharp
public string RepositoryUri { get; }
```

- *Type:* string

---

##### `TrackingBranch`<sup>Required</sup> <a name="TrackingBranch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch"></a>

```csharp
public string TrackingBranch { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettingsGithubSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---


### DialogflowCxAgentGitIntegrationSettingsOutputReference <a name="DialogflowCxAgentGitIntegrationSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentGitIntegrationSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings">PutGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings">ResetGithubSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGithubSettings` <a name="PutGithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings"></a>

```csharp
private void PutGithubSettings(DialogflowCxAgentGitIntegrationSettingsGithubSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `ResetGithubSettings` <a name="ResetGithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings"></a>

```csharp
private void ResetGithubSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings">GithubSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput">GithubSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GithubSettings`<sup>Required</sup> <a name="GithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference GithubSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a>

---

##### `GithubSettingsInput`<sup>Optional</sup> <a name="GithubSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettingsGithubSettings GithubSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxAgentGitIntegrationSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---


### DialogflowCxAgentSpeechToTextSettingsOutputReference <a name="DialogflowCxAgentSpeechToTextSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentSpeechToTextSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation">ResetEnableSpeechAdaptation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableSpeechAdaptation` <a name="ResetEnableSpeechAdaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation"></a>

```csharp
private void ResetEnableSpeechAdaptation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput">EnableSpeechAdaptationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation">EnableSpeechAdaptation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnableSpeechAdaptationInput`<sup>Optional</sup> <a name="EnableSpeechAdaptationInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput"></a>

```csharp
public object EnableSpeechAdaptationInput { get; }
```

- *Type:* object

---

##### `EnableSpeechAdaptation`<sup>Required</sup> <a name="EnableSpeechAdaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation"></a>

```csharp
public object EnableSpeechAdaptation { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxAgentSpeechToTextSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---


### DialogflowCxAgentTextToSpeechSettingsOutputReference <a name="DialogflowCxAgentTextToSpeechSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentTextToSpeechSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">ResetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSynthesizeSpeechConfigs` <a name="ResetSynthesizeSpeechConfigs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```csharp
private void ResetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">SynthesizeSpeechConfigsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">SynthesizeSpeechConfigs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `SynthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="SynthesizeSpeechConfigsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```csharp
public string SynthesizeSpeechConfigsInput { get; }
```

- *Type:* string

---

##### `SynthesizeSpeechConfigs`<sup>Required</sup> <a name="SynthesizeSpeechConfigs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```csharp
public string SynthesizeSpeechConfigs { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxAgentTextToSpeechSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---


### DialogflowCxAgentTimeoutsOutputReference <a name="DialogflowCxAgentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxAgentTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



