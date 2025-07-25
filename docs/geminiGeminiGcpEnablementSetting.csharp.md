# `geminiGeminiGcpEnablementSetting` Submodule <a name="`geminiGeminiGcpEnablementSetting` Submodule" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiGeminiGcpEnablementSetting <a name="GeminiGeminiGcpEnablementSetting" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting google_gemini_gemini_gcp_enablement_setting}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiGeminiGcpEnablementSetting(Construct Scope, string Id, GeminiGeminiGcpEnablementSettingConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig">GeminiGeminiGcpEnablementSettingConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig">GeminiGeminiGcpEnablementSettingConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDisableWebGrounding">ResetDisableWebGrounding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing">ResetEnableCustomerDataSharing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetWebGroundingType">ResetWebGroundingType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts"></a>

```csharp
private void PutTimeouts(GeminiGeminiGcpEnablementSettingTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

---

##### `ResetDisableWebGrounding` <a name="ResetDisableWebGrounding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetDisableWebGrounding"></a>

```csharp
private void ResetDisableWebGrounding()
```

##### `ResetEnableCustomerDataSharing` <a name="ResetEnableCustomerDataSharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetEnableCustomerDataSharing"></a>

```csharp
private void ResetEnableCustomerDataSharing()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetWebGroundingType` <a name="ResetWebGroundingType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.resetWebGroundingType"></a>

```csharp
private void ResetWebGroundingType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiGeminiGcpEnablementSetting.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiGeminiGcpEnablementSetting.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiGeminiGcpEnablementSetting.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

GeminiGeminiGcpEnablementSetting.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GeminiGeminiGcpEnablementSetting resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GeminiGeminiGcpEnablementSetting to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GeminiGeminiGcpEnablementSetting that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GeminiGeminiGcpEnablementSetting to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGroundingInput">DisableWebGroundingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput">EnableCustomerDataSharingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput">GeminiGcpEnablementSettingIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingTypeInput">WebGroundingTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGrounding">DisableWebGrounding</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingType">WebGroundingType</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeouts"></a>

```csharp
public GeminiGeminiGcpEnablementSettingTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference">GeminiGeminiGcpEnablementSettingTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DisableWebGroundingInput`<sup>Optional</sup> <a name="DisableWebGroundingInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGroundingInput"></a>

```csharp
public object DisableWebGroundingInput { get; }
```

- *Type:* object

---

##### `EnableCustomerDataSharingInput`<sup>Optional</sup> <a name="EnableCustomerDataSharingInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharingInput"></a>

```csharp
public object EnableCustomerDataSharingInput { get; }
```

- *Type:* object

---

##### `GeminiGcpEnablementSettingIdInput`<sup>Optional</sup> <a name="GeminiGcpEnablementSettingIdInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingIdInput"></a>

```csharp
public string GeminiGcpEnablementSettingIdInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `WebGroundingTypeInput`<sup>Optional</sup> <a name="WebGroundingTypeInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingTypeInput"></a>

```csharp
public string WebGroundingTypeInput { get; }
```

- *Type:* string

---

##### `DisableWebGrounding`<sup>Required</sup> <a name="DisableWebGrounding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.disableWebGrounding"></a>

```csharp
public object DisableWebGrounding { get; }
```

- *Type:* object

---

##### `EnableCustomerDataSharing`<sup>Required</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.enableCustomerDataSharing"></a>

```csharp
public object EnableCustomerDataSharing { get; }
```

- *Type:* object

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.geminiGcpEnablementSettingId"></a>

```csharp
public string GeminiGcpEnablementSettingId { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `WebGroundingType`<sup>Required</sup> <a name="WebGroundingType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.webGroundingType"></a>

```csharp
public string WebGroundingType { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSetting.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiGeminiGcpEnablementSettingConfig <a name="GeminiGeminiGcpEnablementSettingConfig" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiGeminiGcpEnablementSettingConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string GeminiGcpEnablementSettingId,
    string Location,
    object DisableWebGrounding = null,
    object EnableCustomerDataSharing = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GeminiGeminiGcpEnablementSettingTimeouts Timeouts = null,
    string WebGroundingType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId">GeminiGcpEnablementSettingId</a></code> | <code>string</code> | Id of the Gemini Gcp Enablement setting. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location">Location</a></code> | <code>string</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.disableWebGrounding">DisableWebGrounding</a></code> | <code>object</code> | Whether web grounding should be disabled. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing">EnableCustomerDataSharing</a></code> | <code>object</code> | Whether customer data sharing should be enabled. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.webGroundingType">WebGroundingType</a></code> | <code>string</code> | Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `GeminiGcpEnablementSettingId`<sup>Required</sup> <a name="GeminiGcpEnablementSettingId" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.geminiGcpEnablementSettingId"></a>

```csharp
public string GeminiGcpEnablementSettingId { get; set; }
```

- *Type:* string

Id of the Gemini Gcp Enablement setting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#gemini_gcp_enablement_setting_id GeminiGeminiGcpEnablementSetting#gemini_gcp_enablement_setting_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#location GeminiGeminiGcpEnablementSetting#location}

---

##### `DisableWebGrounding`<sup>Optional</sup> <a name="DisableWebGrounding" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.disableWebGrounding"></a>

```csharp
public object DisableWebGrounding { get; set; }
```

- *Type:* object

Whether web grounding should be disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#disable_web_grounding GeminiGeminiGcpEnablementSetting#disable_web_grounding}

---

##### `EnableCustomerDataSharing`<sup>Optional</sup> <a name="EnableCustomerDataSharing" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.enableCustomerDataSharing"></a>

```csharp
public object EnableCustomerDataSharing { get; set; }
```

- *Type:* object

Whether customer data sharing should be enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#enable_customer_data_sharing GeminiGeminiGcpEnablementSetting#enable_customer_data_sharing}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#id GeminiGeminiGcpEnablementSetting#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#labels GeminiGeminiGcpEnablementSetting#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#project GeminiGeminiGcpEnablementSetting#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.timeouts"></a>

```csharp
public GeminiGeminiGcpEnablementSettingTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts">GeminiGeminiGcpEnablementSettingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#timeouts GeminiGeminiGcpEnablementSetting#timeouts}

---

##### `WebGroundingType`<sup>Optional</sup> <a name="WebGroundingType" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingConfig.property.webGroundingType"></a>

```csharp
public string WebGroundingType { get; set; }
```

- *Type:* string

Web grounding type. Possible values: GROUNDING_WITH_GOOGLE_SEARCH WEB_GROUNDING_FOR_ENTERPRISE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#web_grounding_type GeminiGeminiGcpEnablementSetting#web_grounding_type}

---

### GeminiGeminiGcpEnablementSettingTimeouts <a name="GeminiGeminiGcpEnablementSettingTimeouts" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiGeminiGcpEnablementSettingTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#create GeminiGeminiGcpEnablementSetting#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#delete GeminiGeminiGcpEnablementSetting#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/gemini_gemini_gcp_enablement_setting#update GeminiGeminiGcpEnablementSetting#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiGeminiGcpEnablementSettingTimeoutsOutputReference <a name="GeminiGeminiGcpEnablementSettingTimeoutsOutputReference" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new GeminiGeminiGcpEnablementSettingTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiGeminiGcpEnablementSetting.GeminiGeminiGcpEnablementSettingTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



