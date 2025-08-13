# `dialogflowCxWebhook` Submodule <a name="`dialogflowCxWebhook` Submodule" id="@cdktf/provider-google.dialogflowCxWebhook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxWebhook <a name="DialogflowCxWebhook" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook google_dialogflow_cx_webhook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhook(Construct Scope, string Id, DialogflowCxWebhookConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig">DialogflowCxWebhookConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig">DialogflowCxWebhookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory">PutServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableSpellCorrection">ResetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableStackdriverLogging">ResetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetSecuritySettings">ResetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetServiceDirectory">ResetServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService"></a>

```csharp
private void PutGenericWebService(DialogflowCxWebhookGenericWebService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---

##### `PutServiceDirectory` <a name="PutServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory"></a>

```csharp
private void PutServiceDirectory(DialogflowCxWebhookServiceDirectory Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putServiceDirectory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts"></a>

```csharp
private void PutTimeouts(DialogflowCxWebhookTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>

---

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetEnableSpellCorrection` <a name="ResetEnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableSpellCorrection"></a>

```csharp
private void ResetEnableSpellCorrection()
```

##### `ResetEnableStackdriverLogging` <a name="ResetEnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetEnableStackdriverLogging"></a>

```csharp
private void ResetEnableStackdriverLogging()
```

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetGenericWebService"></a>

```csharp
private void ResetGenericWebService()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetParent"></a>

```csharp
private void ResetParent()
```

##### `ResetSecuritySettings` <a name="ResetSecuritySettings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetSecuritySettings"></a>

```csharp
private void ResetSecuritySettings()
```

##### `ResetServiceDirectory` <a name="ResetServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetServiceDirectory"></a>

```csharp
private void ResetServiceDirectory()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxWebhook resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxWebhook.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxWebhook.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxWebhook.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

DialogflowCxWebhook.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DialogflowCxWebhook resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxWebhook to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxWebhook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxWebhook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference">DialogflowCxWebhookGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectory">ServiceDirectory</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference">DialogflowCxWebhookServiceDirectoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.startFlow">StartFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference">DialogflowCxWebhookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabledInput">DisabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrectionInput">EnableSpellCorrectionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLoggingInput">EnableStackdriverLoggingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parentInput">ParentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettingsInput">SecuritySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectoryInput">ServiceDirectoryInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutInput">TimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabled">Disabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parent">Parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettings">SecuritySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeout">Timeout</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebService"></a>

```csharp
public DialogflowCxWebhookGenericWebServiceOutputReference GenericWebService { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference">DialogflowCxWebhookGenericWebServiceOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ServiceDirectory`<sup>Required</sup> <a name="ServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectory"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryOutputReference ServiceDirectory { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference">DialogflowCxWebhookServiceDirectoryOutputReference</a>

---

##### `StartFlow`<sup>Required</sup> <a name="StartFlow" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.startFlow"></a>

```csharp
public string StartFlow { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeouts"></a>

```csharp
public DialogflowCxWebhookTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference">DialogflowCxWebhookTimeoutsOutputReference</a>

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabledInput"></a>

```csharp
public object DisabledInput { get; }
```

- *Type:* object

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `EnableSpellCorrectionInput`<sup>Optional</sup> <a name="EnableSpellCorrectionInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrectionInput"></a>

```csharp
public object EnableSpellCorrectionInput { get; }
```

- *Type:* object

---

##### `EnableStackdriverLoggingInput`<sup>Optional</sup> <a name="EnableStackdriverLoggingInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLoggingInput"></a>

```csharp
public object EnableStackdriverLoggingInput { get; }
```

- *Type:* object

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.genericWebServiceInput"></a>

```csharp
public DialogflowCxWebhookGenericWebService GenericWebServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parentInput"></a>

```csharp
public string ParentInput { get; }
```

- *Type:* string

---

##### `SecuritySettingsInput`<sup>Optional</sup> <a name="SecuritySettingsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettingsInput"></a>

```csharp
public string SecuritySettingsInput { get; }
```

- *Type:* string

---

##### `ServiceDirectoryInput`<sup>Optional</sup> <a name="ServiceDirectoryInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.serviceDirectoryInput"></a>

```csharp
public DialogflowCxWebhookServiceDirectory ServiceDirectoryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutInput"></a>

```csharp
public string TimeoutInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.disabled"></a>

```csharp
public object Disabled { get; }
```

- *Type:* object

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `EnableSpellCorrection`<sup>Required</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableSpellCorrection"></a>

```csharp
public object EnableSpellCorrection { get; }
```

- *Type:* object

---

##### `EnableStackdriverLogging`<sup>Required</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.parent"></a>

```csharp
public string Parent { get; }
```

- *Type:* string

---

##### `SecuritySettings`<sup>Required</sup> <a name="SecuritySettings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.securitySettings"></a>

```csharp
public string SecuritySettings { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.timeout"></a>

```csharp
public string Timeout { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhook.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxWebhookConfig <a name="DialogflowCxWebhookConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    object Disabled = null,
    object EnableSpellCorrection = null,
    object EnableStackdriverLogging = null,
    DialogflowCxWebhookGenericWebService GenericWebService = null,
    string Id = null,
    string Parent = null,
    string SecuritySettings = null,
    DialogflowCxWebhookServiceDirectory ServiceDirectory = null,
    string Timeout = null,
    DialogflowCxWebhookTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The human-readable name of the webhook, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.disabled">Disabled</a></code> | <code>object</code> | Indicates whether the webhook is disabled. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableSpellCorrection">EnableSpellCorrection</a></code> | <code>object</code> | Deprecated. Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableStackdriverLogging">EnableStackdriverLogging</a></code> | <code>object</code> | Deprecated. Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.parent">Parent</a></code> | <code>string</code> | The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.securitySettings">SecuritySettings</a></code> | <code>string</code> | Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.serviceDirectory">ServiceDirectory</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | service_directory block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeout">Timeout</a></code> | <code>string</code> | Webhook execution timeout. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The human-readable name of the webhook, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#display_name DialogflowCxWebhook#display_name}

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.disabled"></a>

```csharp
public object Disabled { get; set; }
```

- *Type:* object

Indicates whether the webhook is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#disabled DialogflowCxWebhook#disabled}

---

##### `EnableSpellCorrection`<sup>Optional</sup> <a name="EnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableSpellCorrection"></a>

```csharp
public object EnableSpellCorrection { get; set; }
```

- *Type:* object

Deprecated. Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#enable_spell_correction DialogflowCxWebhook#enable_spell_correction}

---

##### `EnableStackdriverLogging`<sup>Optional</sup> <a name="EnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.enableStackdriverLogging"></a>

```csharp
public object EnableStackdriverLogging { get; set; }
```

- *Type:* object

Deprecated. Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#enable_stackdriver_logging DialogflowCxWebhook#enable_stackdriver_logging}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.genericWebService"></a>

```csharp
public DialogflowCxWebhookGenericWebService GenericWebService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#id DialogflowCxWebhook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.parent"></a>

```csharp
public string Parent { get; set; }
```

- *Type:* string

The agent to create a webhook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#parent DialogflowCxWebhook#parent}

---

##### `SecuritySettings`<sup>Optional</sup> <a name="SecuritySettings" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.securitySettings"></a>

```csharp
public string SecuritySettings { get; set; }
```

- *Type:* string

Deprecated. Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#security_settings DialogflowCxWebhook#security_settings}

---

##### `ServiceDirectory`<sup>Optional</sup> <a name="ServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.serviceDirectory"></a>

```csharp
public DialogflowCxWebhookServiceDirectory ServiceDirectory { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

service_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service_directory DialogflowCxWebhook#service_directory}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeout"></a>

```csharp
public string Timeout { get; set; }
```

- *Type:* string

Webhook execution timeout.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#timeout DialogflowCxWebhook#timeout}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookConfig.property.timeouts"></a>

```csharp
public DialogflowCxWebhookTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts">DialogflowCxWebhookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#timeouts DialogflowCxWebhook#timeouts}

---

### DialogflowCxWebhookGenericWebService <a name="DialogflowCxWebhookGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookGenericWebService {
    string Uri,
    string[] AllowedCaCerts = null,
    string HttpMethod = null,
    DialogflowCxWebhookGenericWebServiceOauthConfig OauthConfig = null,
    System.Collections.Generic.IDictionary<string, string> ParameterMapping = null,
    string RequestBody = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null,
    string SecretVersionForUsernamePassword = null,
    object SecretVersionsForRequestHeaders = null,
    string ServiceAgentAuth = null,
    string WebhookType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.uri">Uri</a></code> | <code>string</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>string[]</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.httpMethod">HttpMethod</a></code> | <code>string</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.parameterMapping">ParameterMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestBody">RequestBody</a></code> | <code>string</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>string</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code>object</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.webhookType">WebhookType</a></code> | <code>string</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

##### `AllowedCaCerts`<sup>Optional</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.allowedCaCerts"></a>

```csharp
public string[] AllowedCaCerts { get; set; }
```

- *Type:* string[]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.oauthConfig"></a>

```csharp
public DialogflowCxWebhookGenericWebServiceOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

##### `ParameterMapping`<sup>Optional</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.parameterMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestBody"></a>

```csharp
public string RequestBody { get; set; }
```

- *Type:* string

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

##### `SecretVersionForUsernamePassword`<sup>Optional</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionForUsernamePassword"></a>

```csharp
public string SecretVersionForUsernamePassword { get; set; }
```

- *Type:* string

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

##### `SecretVersionsForRequestHeaders`<sup>Optional</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.secretVersionsForRequestHeaders"></a>

```csharp
public object SecretVersionsForRequestHeaders { get; set; }
```

- *Type:* object

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; set; }
```

- *Type:* string

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

##### `WebhookType`<sup>Optional</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService.property.webhookType"></a>

```csharp
public string WebhookType { get; set; }
```

- *Type:* string

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

### DialogflowCxWebhookGenericWebServiceOauthConfig <a name="DialogflowCxWebhookGenericWebServiceOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookGenericWebServiceOauthConfig {
    string ClientId,
    string TokenEndpoint,
    string ClientSecret = null,
    string[] Scopes = null,
    string SecretVersionForClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders {
    string Key,
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}.

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}

---

### DialogflowCxWebhookServiceDirectory <a name="DialogflowCxWebhookServiceDirectory" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectory {
    string Service,
    DialogflowCxWebhookServiceDirectoryGenericWebService GenericWebService = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.service">Service</a></code> | <code>string</code> | The name of Service Directory service. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | generic_web_service block. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The name of Service Directory service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service DialogflowCxWebhook#service}

---

##### `GenericWebService`<sup>Optional</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory.property.genericWebService"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebService GenericWebService { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#generic_web_service DialogflowCxWebhook#generic_web_service}

---

### DialogflowCxWebhookServiceDirectoryGenericWebService <a name="DialogflowCxWebhookServiceDirectoryGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryGenericWebService {
    string Uri,
    string[] AllowedCaCerts = null,
    string HttpMethod = null,
    DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig OauthConfig = null,
    System.Collections.Generic.IDictionary<string, string> ParameterMapping = null,
    string RequestBody = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null,
    string SecretVersionForUsernamePassword = null,
    object SecretVersionsForRequestHeaders = null,
    string ServiceAgentAuth = null,
    string WebhookType = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.uri">Uri</a></code> | <code>string</code> | The webhook URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>string[]</code> | Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod">HttpMethod</a></code> | <code>string</code> | HTTP method for the flexible webhook calls. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping">ParameterMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Maps the values extracted from specific fields of the flexible webhook response into session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody">RequestBody</a></code> | <code>string</code> | Defines a custom JSON object as request body to send to flexible webhook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The HTTP request headers to send together with webhook requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>string</code> | The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code>object</code> | secret_versions_for_request_headers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType">WebhookType</a></code> | <code>string</code> | Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"]. |

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

The webhook URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#uri DialogflowCxWebhook#uri}

---

##### `AllowedCaCerts`<sup>Optional</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.allowedCaCerts"></a>

```csharp
public string[] AllowedCaCerts { get; set; }
```

- *Type:* string[]

Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store. If this
is empty or unspecified, Dialogflow will use Google's default trust store
to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt
name". For instance a certificate can be self-signed using the following
command,
openssl x509 -req -days 200 -in example.com.csr \
-signkey example.com.key \
-out example.com.crt \
-extfile <(printf "\nsubjectAltName='DNS:www.example.com'")

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#allowed_ca_certs DialogflowCxWebhook#allowed_ca_certs}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.httpMethod"></a>

```csharp
public string HttpMethod { get; set; }
```

- *Type:* string

HTTP method for the flexible webhook calls.

Standard webhook always uses
POST. Possible values: ["POST", "GET", "HEAD", "PUT", "DELETE", "PATCH", "OPTIONS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#http_method DialogflowCxWebhook#http_method}

---

##### `OauthConfig`<sup>Optional</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.oauthConfig"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig OauthConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#oauth_config DialogflowCxWebhook#oauth_config}

---

##### `ParameterMapping`<sup>Optional</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.parameterMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterMapping { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Maps the values extracted from specific fields of the flexible webhook response into session parameters.

* Key: session parameter name
* Value: field path in the webhook response

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#parameter_mapping DialogflowCxWebhook#parameter_mapping}

---

##### `RequestBody`<sup>Optional</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestBody"></a>

```csharp
public string RequestBody { get; set; }
```

- *Type:* string

Defines a custom JSON object as request body to send to flexible webhook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_body DialogflowCxWebhook#request_body}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The HTTP request headers to send together with webhook requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#request_headers DialogflowCxWebhook#request_headers}

---

##### `SecretVersionForUsernamePassword`<sup>Optional</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionForUsernamePassword"></a>

```csharp
public string SecretVersionForUsernamePassword { get; set; }
```

- *Type:* string

The SecretManager secret version resource storing the username:password pair for HTTP Basic authentication. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_username_password DialogflowCxWebhook#secret_version_for_username_password}

---

##### `SecretVersionsForRequestHeaders`<sup>Optional</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.secretVersionsForRequestHeaders"></a>

```csharp
public object SecretVersionsForRequestHeaders { get; set; }
```

- *Type:* object

secret_versions_for_request_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_versions_for_request_headers DialogflowCxWebhook#secret_versions_for_request_headers}

---

##### `ServiceAgentAuth`<sup>Optional</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; set; }
```

- *Type:* string

Indicate the auth token type generated from the [Diglogflow service agent](https://cloud.google.com/iam/docs/service-agents#dialogflow-service-agent). The generated token is sent in the Authorization header. Possible values: ["NONE", "ID_TOKEN", "ACCESS_TOKEN"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#service_agent_auth DialogflowCxWebhook#service_agent_auth}

---

##### `WebhookType`<sup>Optional</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService.property.webhookType"></a>

```csharp
public string WebhookType { get; set; }
```

- *Type:* string

Type of the webhook. Possible values: ["STANDARD", "FLEXIBLE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#webhook_type DialogflowCxWebhook#webhook_type}

---

### DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig {
    string ClientId,
    string TokenEndpoint,
    string ClientSecret = null,
    string[] Scopes = null,
    string SecretVersionForClientSecret = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId">ClientId</a></code> | <code>string</code> | The client ID provided by the 3rd party platform. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | The token endpoint provided by the 3rd party platform to exchange an access token. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes">Scopes</a></code> | <code>string[]</code> | The OAuth scopes to grant. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | The name of the SecretManager secret version resource storing the client secret. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The client ID provided by the 3rd party platform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_id DialogflowCxWebhook#client_id}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; set; }
```

- *Type:* string

The token endpoint provided by the 3rd party platform to exchange an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#token_endpoint DialogflowCxWebhook#token_endpoint}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The client secret provided by the 3rd party platform.  If the 'secret_version_for_client_secret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#client_secret DialogflowCxWebhook#client_secret}

---

##### `Scopes`<sup>Optional</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.scopes"></a>

```csharp
public string[] Scopes { get; set; }
```

- *Type:* string[]

The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#scopes DialogflowCxWebhook#scopes}

---

##### `SecretVersionForClientSecret`<sup>Optional</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; set; }
```

- *Type:* string

The name of the SecretManager secret version resource storing the client secret.

If this field is set, the 'client_secret' field will be
ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version_for_client_secret DialogflowCxWebhook#secret_version_for_client_secret}

---

### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders {
    string Key,
    string SecretVersion
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key">Key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion">SecretVersion</a></code> | <code>string</code> | The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#key DialogflowCxWebhook#key}.

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeaders.property.secretVersion"></a>

```csharp
public string SecretVersion { get; set; }
```

- *Type:* string

The SecretManager secret version resource storing the header value. Format: 'projects/{project}/secrets/{secret}/versions/{version}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#secret_version DialogflowCxWebhook#secret_version}

---

### DialogflowCxWebhookTimeouts <a name="DialogflowCxWebhookTimeouts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#create DialogflowCxWebhook#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#delete DialogflowCxWebhook#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_webhook#update DialogflowCxWebhook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference <a name="DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```csharp
private void ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```csharp
public string SecretVersionForClientSecretInput { get; }
```

- *Type:* string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxWebhookGenericWebServiceOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---


### DialogflowCxWebhookGenericWebServiceOutputReference <a name="DialogflowCxWebhookGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookGenericWebServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">PutSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts">ResetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping">ResetParameterMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">ResetSecretVersionForUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">ResetSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType">ResetWebhookType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig"></a>

```csharp
private void PutOauthConfig(DialogflowCxWebhookGenericWebServiceOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---

##### `PutSecretVersionsForRequestHeaders` <a name="PutSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```csharp
private void PutSecretVersionsForRequestHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedCaCerts` <a name="ResetAllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```csharp
private void ResetAllowedCaCerts()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetOauthConfig"></a>

```csharp
private void ResetOauthConfig()
```

##### `ResetParameterMapping` <a name="ResetParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetParameterMapping"></a>

```csharp
private void ResetParameterMapping()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestBody"></a>

```csharp
private void ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetSecretVersionForUsernamePassword` <a name="ResetSecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```csharp
private void ResetSecretVersionForUsernamePassword()
```

##### `ResetSecretVersionsForRequestHeaders` <a name="ResetSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```csharp
private void ResetSecretVersionsForRequestHeaders()
```

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```csharp
private void ResetServiceAgentAuth()
```

##### `ResetWebhookType` <a name="ResetWebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.resetWebhookType"></a>

```csharp
private void ResetWebhookType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput">AllowedCaCertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput">ParameterMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">SecretVersionForUsernamePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">SecretVersionsForRequestHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput">WebhookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping">ParameterMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody">RequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType">WebhookType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfig"></a>

```csharp
public DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookGenericWebServiceOauthConfigOutputReference</a>

---

##### `SecretVersionsForRequestHeaders`<sup>Required</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```csharp
public DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList SecretVersionsForRequestHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `AllowedCaCertsInput`<sup>Optional</sup> <a name="AllowedCaCertsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```csharp
public string[] AllowedCaCertsInput { get; }
```

- *Type:* string[]

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```csharp
public DialogflowCxWebhookGenericWebServiceOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOauthConfig">DialogflowCxWebhookGenericWebServiceOauthConfig</a>

---

##### `ParameterMappingInput`<sup>Optional</sup> <a name="ParameterMappingInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBodyInput"></a>

```csharp
public string RequestBodyInput { get; }
```

- *Type:* string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretVersionForUsernamePasswordInput`<sup>Optional</sup> <a name="SecretVersionForUsernamePasswordInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```csharp
public string SecretVersionForUsernamePasswordInput { get; }
```

- *Type:* string

---

##### `SecretVersionsForRequestHeadersInput`<sup>Optional</sup> <a name="SecretVersionsForRequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```csharp
public object SecretVersionsForRequestHeadersInput { get; }
```

- *Type:* object

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```csharp
public string ServiceAgentAuthInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `WebhookTypeInput`<sup>Optional</sup> <a name="WebhookTypeInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```csharp
public string WebhookTypeInput { get; }
```

- *Type:* string

---

##### `AllowedCaCerts`<sup>Required</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```csharp
public string[] AllowedCaCerts { get; }
```

- *Type:* string[]

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `ParameterMapping`<sup>Required</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.parameterMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestBody"></a>

```csharp
public string RequestBody { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretVersionForUsernamePassword`<sup>Required</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```csharp
public string SecretVersionForUsernamePassword { get; }
```

- *Type:* string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `WebhookType`<sup>Required</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.webhookType"></a>

```csharp
public string WebhookType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxWebhookGenericWebService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebService">DialogflowCxWebhookGenericWebService</a>

---


### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```csharp
private DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes">ResetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret">ResetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetScopes` <a name="ResetScopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetScopes"></a>

```csharp
private void ResetScopes()
```

##### `ResetSecretVersionForClientSecret` <a name="ResetSecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```csharp
private void ResetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput">ScopesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput">SecretVersionForClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes">Scopes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret">SecretVersionForClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `ScopesInput`<sup>Optional</sup> <a name="ScopesInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopesInput"></a>

```csharp
public string[] ScopesInput { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecretInput`<sup>Optional</sup> <a name="SecretVersionForClientSecretInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```csharp
public string SecretVersionForClientSecretInput { get; }
```

- *Type:* string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpointInput"></a>

```csharp
public string TokenEndpointInput { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.scopes"></a>

```csharp
public string[] Scopes { get; }
```

- *Type:* string[]

---

##### `SecretVersionForClientSecret`<sup>Required</sup> <a name="SecretVersionForClientSecret" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```csharp
public string SecretVersionForClientSecret { get; }
```

- *Type:* string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.tokenEndpoint"></a>

```csharp
public string TokenEndpoint { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig">PutOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders">PutSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts">ResetAllowedCaCerts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig">ResetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping">ResetParameterMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody">ResetRequestBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword">ResetSecretVersionForUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders">ResetSecretVersionsForRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth">ResetServiceAgentAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType">ResetWebhookType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOauthConfig` <a name="PutOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig"></a>

```csharp
private void PutOauthConfig(DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---

##### `PutSecretVersionsForRequestHeaders` <a name="PutSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders"></a>

```csharp
private void PutSecretVersionsForRequestHeaders(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.putSecretVersionsForRequestHeaders.parameter.value"></a>

- *Type:* object

---

##### `ResetAllowedCaCerts` <a name="ResetAllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetAllowedCaCerts"></a>

```csharp
private void ResetAllowedCaCerts()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetHttpMethod"></a>

```csharp
private void ResetHttpMethod()
```

##### `ResetOauthConfig` <a name="ResetOauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetOauthConfig"></a>

```csharp
private void ResetOauthConfig()
```

##### `ResetParameterMapping` <a name="ResetParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetParameterMapping"></a>

```csharp
private void ResetParameterMapping()
```

##### `ResetRequestBody` <a name="ResetRequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestBody"></a>

```csharp
private void ResetRequestBody()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetSecretVersionForUsernamePassword` <a name="ResetSecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionForUsernamePassword"></a>

```csharp
private void ResetSecretVersionForUsernamePassword()
```

##### `ResetSecretVersionsForRequestHeaders` <a name="ResetSecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetSecretVersionsForRequestHeaders"></a>

```csharp
private void ResetSecretVersionsForRequestHeaders()
```

##### `ResetServiceAgentAuth` <a name="ResetServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetServiceAgentAuth"></a>

```csharp
private void ResetServiceAgentAuth()
```

##### `ResetWebhookType` <a name="ResetWebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.resetWebhookType"></a>

```csharp
private void ResetWebhookType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig">OauthConfig</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders">SecretVersionsForRequestHeaders</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput">AllowedCaCertsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput">OauthConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput">ParameterMappingInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput">RequestBodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput">SecretVersionForUsernamePasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput">SecretVersionsForRequestHeadersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput">ServiceAgentAuthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput">WebhookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts">AllowedCaCerts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod">HttpMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping">ParameterMapping</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody">RequestBody</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword">SecretVersionForUsernamePassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth">ServiceAgentAuth</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType">WebhookType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OauthConfig`<sup>Required</sup> <a name="OauthConfig" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfig"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference OauthConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfigOutputReference</a>

---

##### `SecretVersionsForRequestHeaders`<sup>Required</sup> <a name="SecretVersionsForRequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeaders"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList SecretVersionsForRequestHeaders { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList">DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList</a>

---

##### `AllowedCaCertsInput`<sup>Optional</sup> <a name="AllowedCaCertsInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCertsInput"></a>

```csharp
public string[] AllowedCaCertsInput { get; }
```

- *Type:* string[]

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethodInput"></a>

```csharp
public string HttpMethodInput { get; }
```

- *Type:* string

---

##### `OauthConfigInput`<sup>Optional</sup> <a name="OauthConfigInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.oauthConfigInput"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig OauthConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig">DialogflowCxWebhookServiceDirectoryGenericWebServiceOauthConfig</a>

---

##### `ParameterMappingInput`<sup>Optional</sup> <a name="ParameterMappingInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMappingInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterMappingInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestBodyInput`<sup>Optional</sup> <a name="RequestBodyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBodyInput"></a>

```csharp
public string RequestBodyInput { get; }
```

- *Type:* string

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretVersionForUsernamePasswordInput`<sup>Optional</sup> <a name="SecretVersionForUsernamePasswordInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePasswordInput"></a>

```csharp
public string SecretVersionForUsernamePasswordInput { get; }
```

- *Type:* string

---

##### `SecretVersionsForRequestHeadersInput`<sup>Optional</sup> <a name="SecretVersionsForRequestHeadersInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionsForRequestHeadersInput"></a>

```csharp
public object SecretVersionsForRequestHeadersInput { get; }
```

- *Type:* object

---

##### `ServiceAgentAuthInput`<sup>Optional</sup> <a name="ServiceAgentAuthInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuthInput"></a>

```csharp
public string ServiceAgentAuthInput { get; }
```

- *Type:* string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `WebhookTypeInput`<sup>Optional</sup> <a name="WebhookTypeInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookTypeInput"></a>

```csharp
public string WebhookTypeInput { get; }
```

- *Type:* string

---

##### `AllowedCaCerts`<sup>Required</sup> <a name="AllowedCaCerts" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.allowedCaCerts"></a>

```csharp
public string[] AllowedCaCerts { get; }
```

- *Type:* string[]

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.httpMethod"></a>

```csharp
public string HttpMethod { get; }
```

- *Type:* string

---

##### `ParameterMapping`<sup>Required</sup> <a name="ParameterMapping" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.parameterMapping"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> ParameterMapping { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestBody`<sup>Required</sup> <a name="RequestBody" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestBody"></a>

```csharp
public string RequestBody { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SecretVersionForUsernamePassword`<sup>Required</sup> <a name="SecretVersionForUsernamePassword" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.secretVersionForUsernamePassword"></a>

```csharp
public string SecretVersionForUsernamePassword { get; }
```

- *Type:* string

---

##### `ServiceAgentAuth`<sup>Required</sup> <a name="ServiceAgentAuth" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.serviceAgentAuth"></a>

```csharp
public string ServiceAgentAuth { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `WebhookType`<sup>Required</sup> <a name="WebhookType" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.webhookType"></a>

```csharp
public string WebhookType { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebService InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get"></a>

```csharp
private DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference <a name="DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput">SecretVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion">SecretVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `SecretVersionInput`<sup>Optional</sup> <a name="SecretVersionInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersionInput"></a>

```csharp
public string SecretVersionInput { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `SecretVersion`<sup>Required</sup> <a name="SecretVersion" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.secretVersion"></a>

```csharp
public string SecretVersion { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceSecretVersionsForRequestHeadersOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### DialogflowCxWebhookServiceDirectoryOutputReference <a name="DialogflowCxWebhookServiceDirectoryOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookServiceDirectoryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService">PutGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService">ResetGenericWebService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGenericWebService` <a name="PutGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService"></a>

```csharp
private void PutGenericWebService(DialogflowCxWebhookServiceDirectoryGenericWebService Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `ResetGenericWebService` <a name="ResetGenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.resetGenericWebService"></a>

```csharp
private void ResetGenericWebService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService">GenericWebService</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput">GenericWebServiceInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `GenericWebService`<sup>Required</sup> <a name="GenericWebService" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebService"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference GenericWebService { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference">DialogflowCxWebhookServiceDirectoryGenericWebServiceOutputReference</a>

---

##### `GenericWebServiceInput`<sup>Optional</sup> <a name="GenericWebServiceInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.genericWebServiceInput"></a>

```csharp
public DialogflowCxWebhookServiceDirectoryGenericWebService GenericWebServiceInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryGenericWebService">DialogflowCxWebhookServiceDirectoryGenericWebService</a>

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectoryOutputReference.property.internalValue"></a>

```csharp
public DialogflowCxWebhookServiceDirectory InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookServiceDirectory">DialogflowCxWebhookServiceDirectory</a>

---


### DialogflowCxWebhookTimeoutsOutputReference <a name="DialogflowCxWebhookTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Google;

new DialogflowCxWebhookTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dialogflowCxWebhook.DialogflowCxWebhookTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



